/**
 * Single source of truth for how to reach Fabio.
 *
 * Consumed by the footer row and by the contacts page, so a handle only ever
 * has to change in one place. `copyValue` is set where the raw string is worth
 * having on the clipboard -- an address or a number people paste elsewhere.
 */
export const CONTACT_KEYS = [
  "email",
  "linkedin",
  "github",
  "whatsapp",
  "instagram",
] as const;

export type TContactKey = (typeof CONTACT_KEYS)[number];

export type TContact = {
  href: string;
  /** Shown on the contacts page. */
  value: string;
  /** Present when the value is worth copying rather than only opening. */
  copyValue?: string;
  external: boolean;
};

export const CONTACTS: Record<TContactKey, TContact> = {
  email: {
    href: "mailto:fabio.guieiro@gmail.com",
    value: "fabio.guieiro@gmail.com",
    copyValue: "fabio.guieiro@gmail.com",
    external: false,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/fabioguieiro/",
    value: "/in/fabioguieiro",
    external: true,
  },
  github: {
    href: "https://github.com/FabioGuieiro",
    value: "/FabioGuieiro",
    external: true,
  },
  whatsapp: {
    href: "https://wa.me/5531992472727",
    value: "+55 31 99247-2727",
    copyValue: "+5531992472727",
    external: true,
  },
  instagram: {
    href: "https://www.instagram.com/fabio_guieiro/",
    value: "@fabio_guieiro",
    external: true,
  },
};
