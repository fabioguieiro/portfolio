"use client";
import { useTranslations } from "next-intl";
import { ComponentType, useCallback, useState } from "react";

import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons";
import { IconProps } from "@/components/icons/types";
import { CONTACT_KEYS, CONTACTS, TContactKey } from "@/data/contacts";

import { CardHeader } from "../Card/CardHeader";
import { Marquee } from "../Marquee";

type TBlockStyle = {
  Icon: ComponentType<IconProps>;
  /** Field colour: fixed in both modes, always carrying fieldInk. */
  background: string;
  /** Column span on the six-column desktop grid. */
  span: string;
};

const BLOCKS: Record<TContactKey, TBlockStyle> = {
  email: { Icon: EmailIcon, background: "bg-tomato", span: "md:col-span-3" },
  linkedin: { Icon: LinkedinIcon, background: "bg-sky", span: "md:col-span-3" },
  github: { Icon: GithubIcon, background: "bg-sun", span: "md:col-span-2" },
  whatsapp: {
    Icon: WhatsappIcon,
    background: "bg-mint",
    span: "md:col-span-2",
  },
  instagram: {
    Icon: InstagramIcon,
    background: "bg-rose",
    span: "md:col-span-2",
  },
};

export const Contacts = () => {
  const t = useTranslations("Contacts");
  const [copiedKey, setCopiedKey] = useState<TContactKey | null>(null);

  const handleCopy = useCallback(async (key: TContactKey, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Clipboard is unavailable (insecure context, or the user blocked it).
      // The value is on screen and selectable, so there is nothing to recover.
    }
  }, []);

  return (
    <div className="w-full bg-ground text-ink flex flex-col items-center pb-0">
      <h1 className="font-secondary text-5xl md:text-7xl text-display mt-10 mb-6 px-4 text-center">
        {t("pageTitle")}
      </h1>

      {/* the site's window chrome, so the page still salutes the rest of it */}
      <div className="w-11/12 max-w-3xl border-2 border-outline bg-surface rounded-lg overflow-hidden mb-10">
        <CardHeader />
        <div className="px-5 py-4 flex flex-col gap-1">
          <p className="font-primary text-lg md:text-xl font-bold">
            {t("availability")}
          </p>
          <p className="font-primary text-sm text-inkMuted">{t("basedIn")}</p>
        </div>
      </div>

      <ul className="w-11/12 max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-4 mb-12 list-none p-0">
        {CONTACT_KEYS.map((key) => {
          const { href, value, copyValue, external } = CONTACTS[key];
          const { Icon, background, span } = BLOCKS[key];
          const label = t(`${key}Label`);
          const isCopied = copiedKey === key;

          return (
            <li key={key} className={span}>
              <div
                className={`press relative h-full min-h-[11rem] border-4 border-fieldInk text-fieldInk ${background} p-5 flex flex-col overflow-hidden`}
              >
                {/* stretched link: the whole block is the primary target */}
                <a
                  href={href}
                  aria-label={t("openAria", { label })}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="absolute inset-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-fieldInk focus-visible:ring-offset-2"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-4 [writing-mode:vertical-rl] font-primary text-[10px] font-bold uppercase tracking-[0.2em] opacity-70"
                >
                  {t(`${key}Note`)}
                </span>

                <span className="pointer-events-none">
                  <Icon size={30} color="currentColor" />
                </span>

                {/* one bottom-anchored group, so labels line up across the row
                    whether or not the block carries a copy button */}
                <div className="mt-auto">
                  <p className="pointer-events-none font-bebas text-4xl md:text-5xl leading-none">
                    {label}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <p className="pointer-events-none font-primary text-sm md:text-base tracking-wide break-all">
                      {value}
                    </p>
                    {copyValue && (
                      <button
                        type="button"
                        onClick={() => handleCopy(key, copyValue)}
                        aria-label={t("copyAria", { label })}
                        className="relative z-10 border-2 border-fieldInk bg-paper px-3 py-1 font-primary text-xs font-bold uppercase tracking-widest hover:bg-sun focus:outline-none focus-visible:ring-4 focus-visible:ring-fieldInk"
                      >
                        {isCopied ? t("copied") : t("copy")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Marquee text={t("marquee")} />
    </div>
  );
};
