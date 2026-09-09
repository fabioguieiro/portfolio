"use client";
import { useTranslations } from "next-intl";
import { ComponentType, Fragment, useEffect, useRef, useState } from "react";

import {
  Book,
  Btix,
  Casa,
  Computer,
  Forum,
  GreatWolf,
  Inter,
  Lifting,
  Money,
  Pizza,
  Queima,
  Teknisa,
  Tickets,
  Trophy,
  TV,
  Venmo,
} from "@/components/images";
import { TSizedImageProps } from "@/components/images/types";

import { Card } from "../Card";
import { DashedConnector } from "../DashedConnector";
import { TechBadge } from "../TechBadge";
import { COMPANY_KEYS, TCompanyKey, useDescriptions } from "./useDescriptions";

type TCompanyVisuals = {
  Logo: ComponentType<TSizedImageProps>;
  Illustration: ComponentType<TSizedImageProps>;
  illustrationSize: number;
};

const VISUALS: Record<TCompanyKey, TCompanyVisuals> = {
  Teknisa: { Logo: Teknisa, Illustration: Pizza, illustrationSize: 120 },
  Forum: { Logo: Forum, Illustration: Book, illustrationSize: 130 },
  Queima: { Logo: Queima, Illustration: Lifting, illustrationSize: 140 },
  Inter: { Logo: Inter, Illustration: Money, illustrationSize: 140 },
  Btix: { Logo: Btix, Illustration: Tickets, illustrationSize: 140 },
  Casa: { Logo: Casa, Illustration: TV, illustrationSize: 140 },
  Venmo: { Logo: Venmo, Illustration: Money, illustrationSize: 140 },
  GreatWolf: {
    Logo: GreatWolf,
    Illustration: Computer,
    illustrationSize: 150,
  },
};

// The newest role is the one worth showing first.
const DEFAULT_COMPANY: TCompanyKey = COMPANY_KEYS[COMPANY_KEYS.length - 1];

export const Timeline = () => {
  const t = useTranslations("Career");
  const companyDetails = useDescriptions();

  const [active, setActive] = useState<TCompanyKey>(DEFAULT_COMPANY);

  const trackRef = useRef<HTMLDivElement>(null);
  const defaultLogoRef = useRef<HTMLDivElement>(null);

  // With eight companies the track scrolls on narrow screens. Bring the
  // preselected (most recent) role into view instead of leaving it off-screen.
  useEffect(() => {
    const track = trackRef.current;
    const logo = defaultLogoRef.current;
    if (!track || !logo) return;

    track.scrollLeft =
      logo.offsetLeft - (track.clientWidth - logo.clientWidth) / 2;
  }, []);

  const details = companyDetails[active];
  const { Illustration, illustrationSize } = VISUALS[active];

  return (
    <div className="flex-col h-full w-full bg-ground text-ink flex items-center pb-12">
      <h1 className="self-center font-secondary text-3xl md:text-6xl text-display my-8">
        {t("pageTitle")}
      </h1>

      <div ref={trackRef} className="w-full overflow-x-auto px-4 pb-2">
        {/* w-max + mx-auto centres the track while it fits and lets it scroll
            from the left edge once it no longer does. */}
        <div className="flex w-max mx-auto items-center">
          {COMPANY_KEYS.map((key, index) => {
            const { Logo } = VISUALS[key];

            return (
              <Fragment key={key}>
                {index > 0 && <DashedConnector />}
                <div
                  ref={key === DEFAULT_COMPANY ? defaultLogoRef : undefined}
                  className="shrink-0"
                >
                  <Logo
                    onClick={() => setActive(key)}
                    aria-label={companyDetails[key].company}
                    className={`rounded-full border-4 cursor-pointer border-outline ${
                      active === key ? "md:w-32 w-14" : "md:w-24 w-10"
                    }`}
                  />
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="md:flex gap-8">
        <div className="flex flex-col">
          <Card
            imageOnRight
            title={details.jobTitle}
            image={
              <Illustration
                width={illustrationSize}
                height={illustrationSize}
              />
            }
          >
            <p>{details.company}</p>
            <p>{details.period}</p>
            <p className="text-sm">{details.location}</p>
          </Card>

          <Card
            title={t("achievements")}
            image={<Trophy width={150} height={150} />}
          >
            <ul>
              {details.achievements.map((achievement) => (
                <li
                  className="bg-mint text-fieldInk border-2 border-fieldInk mb-2 rounded-full flex items-center justify-start py-1 px-2"
                  key={achievement}
                >
                  <div className="w-1/6">
                    <div className="w-5 h-5 rounded-full bg-sun border-fieldInk border"></div>
                  </div>

                  <div className="w-5/6">
                    <p className="text-xs text-start">{achievement}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card title={t("technologies")} image={null} imageOnRight>
          <div className="grid grid-cols-3 ml-3 md:ml-0 md:grid-cols-4 gap-4">
            {details.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
