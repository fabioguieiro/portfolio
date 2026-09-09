"use client";
import { useTranslations } from "next-intl";

export const COMPANY_KEYS = [
  "Teknisa",
  "Forum",
  "Queima",
  "Inter",
  "Btix",
  "Casa",
  "Venmo",
  "GreatWolf",
] as const;

export type TCompanyKey = (typeof COMPANY_KEYS)[number];

export type TCompanyDetails = {
  company: string;
  period: string;
  jobTitle: string;
  location: string;
  achievements: string[];
  techStack: string[];
};

export const useDescriptions = (): Record<TCompanyKey, TCompanyDetails> => {
  const t = useTranslations("Career");

  return {
    Teknisa: {
      company: "Teknisa",
      period: t("teknisaPeriod"),
      jobTitle: t("teknisaJobTitle"),
      location: t("teknisaLocation"),
      achievements: [t("teknisaAchievement1"), t("teknisaAchievement2")],
      techStack: ["Vue.js", "Javascript", "React", "HTML", "CSS", "GIT"],
    },

    Forum: {
      company: "Editora Fórum",
      period: t("forumPeriod"),
      jobTitle: t("forumJobTitle"),
      location: t("forumLocation"),
      achievements: [t("forumAchievement1"), t("forumAchievement2")],
      techStack: [
        "React",
        "Next.js",
        "Typescript",
        "Javascript",
        "Tailwind",
        "Node.js",
        "Redux",
        "AWS",
        "GIT",
      ],
    },

    Queima: {
      company: "Queima Diária",
      period: t("queimaPeriod"),
      jobTitle: t("queimaJobTitle"),
      location: t("queimaLocation"),
      achievements: [
        t("queimaAchievement1"),
        t("queimaAchievement2"),
        t("queimaAchievement3"),
      ],
      techStack: [
        "React",
        "React Native",
        "Typescript",
        "Javascript",
        "Styled Components",
        "Redux",
        "CSS",
        "Tizen",
        "WebOS",
        "GIT",
      ],
    },

    Inter: {
      company: "Banco Inter",
      period: t("interPeriod"),
      jobTitle: t("interJobTitle"),
      location: t("interLocation"),
      achievements: [
        t("interAchievement1"),
        t("interAchievement2"),
        t("interAchievement3"),
      ],
      techStack: [
        "React",
        "Typescript",
        "Styled Components",
        "Jest",
        "New Relic",
        "AWS",
        "GIT",
      ],
    },

    Btix: {
      company: "Btix",
      period: t("btixPeriod"),
      jobTitle: t("btixJobTitle"),
      location: t("btixLocation"),
      achievements: [
        t("btixAchievement1"),
        t("btixAchievement2"),
        t("btixAchievement3"),
      ],
      techStack: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "React Native",
        "MongoDB",
        "Material UI",
        "Mantine UI",
        "Yup",
        "GIT",
      ],
    },

    Casa: {
      company: "Casa do Saber",
      period: t("casaPeriod"),
      jobTitle: t("casaJobTitle"),
      location: t("casaLocation"),
      achievements: [t("casaAchievement1"), t("casaAchievement2")],
      techStack: [
        "React",
        "React Native",
        "Typescript",
        "Styled Components",
        "Tizen",
        "WebOS",
        "Jest",
        "GIT",
      ],
    },

    Venmo: {
      company: "PayPal / Venmo",
      period: t("venmoPeriod"),
      jobTitle: t("venmoJobTitle"),
      location: t("venmoLocation"),
      achievements: [
        t("venmoAchievement1"),
        t("venmoAchievement2"),
        t("venmoAchievement3"),
      ],
      techStack: [
        "React",
        "Node.js",
        "Typescript",
        "GraphQL",
        "Apollo Client",
        "GIT",
      ],
    },

    GreatWolf: {
      company: "Great Wolf Lodge",
      period: t("greatWolfPeriod"),
      jobTitle: t("greatWolfJobTitle"),
      location: t("greatWolfLocation"),
      achievements: [
        t("greatWolfAchievement1"),
        t("greatWolfAchievement2"),
        t("greatWolfAchievement3"),
        t("greatWolfAchievement4"),
      ],
      techStack: [
        "React",
        "Redux",
        "Javascript",
        "Styled Components",
        "Jest",
        "Playwright",
        "Yup",
        "Azure DevOps",
        "GIT",
      ],
    },
  };
};
