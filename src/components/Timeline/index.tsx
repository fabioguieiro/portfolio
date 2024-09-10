"use client";
import { Versa } from "../../../public/images/Versa";
import { Teknisa } from "../../../public/images/Teknisa";
import { Forum } from "../../../public/images/Forum";
import { Queima } from "../../../public/images/Queima";
import { Inter } from "../../../public/images/Inter";
import { Btix } from "../../../public/images/Btix";
import { Casa } from "../../../public/images/Casa";
import { Computer } from "../../../public/images/Computer";
import { Pizza } from "../../../public/images/Pizza";
import { Book } from "../../../public/images/Book";
import { Lifting } from "../../../public/images/Lifting";
import { Money } from "../../../public/images/Money";
import { Tickets } from "../../../public/images/Ticket";
import { TV } from "../../../public/images/TV";
import { Trophy } from "../../../public/images/Trophy";
import { DashedConnector } from "../DashedConnector";
import { useState } from "react";
import { CompanyDescriptions } from "./CompanyDescriptions";
import { Card } from "../Card";
import { TechBadge } from "../TechBadge";
import { useTranslations } from "next-intl";

export const Timeline = () => {
  const t = useTranslations("Career");
  const [active, setActive] = useState<
    | "Versa"
    | "Teknisa"
    | "Forum"
    | "Queima"
    | "Inter"
    | "Btix"
    | "Casa"
    | undefined
  >("Casa");

  const getIllustration = () => {
    switch (active) {
      case "Versa":
        return <Computer width={160} height={160} />;
      case "Teknisa":
        return <Pizza width={120} height={120} />;
      case "Forum":
        return <Book width={130} height={130} />;
      case "Queima":
        return <Lifting width={140} height={140} />;
      case "Inter":
        return <Money width={140} height={140} />;
      case "Btix":
        return <Tickets width={140} height={140} />;
      case "Casa":
        return <TV width={140} height={140} />;
    }
  };
  return (
    <div className="flex-col h-full w-full bg-amber-100 text-black dark:bg-royal dark:text-gold flex items-center pb-12">
      <h1 className="self-center font-secondary text-3xl md:text-6xl text-tomato my-8">
        {t("pageTitle")}
      </h1>
      <div className="w-full px-4 justify-center items-center flex ">
        <Versa
          onClick={() => setActive("Versa")}
          className={` rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Versa" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />

        <DashedConnector />

        <Teknisa
          onClick={() => setActive("Teknisa")}
          className={`rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Teknisa" ? "md:w-32 w-14" : "w-10 md:w-24 "
          }  `}
        />

        <DashedConnector />

        <Forum
          onClick={() => setActive("Forum")}
          className={` rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Forum" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />

        <DashedConnector />

        <Queima
          onClick={() => setActive("Queima")}
          className={` rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Queima" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />

        <DashedConnector />

        <Inter
          onClick={() => setActive("Inter")}
          className={` rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Inter" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />

        <DashedConnector />

        <Btix
          onClick={() => setActive("Btix")}
          className={`rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Btix" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />

        <DashedConnector />

        <Casa
          onClick={() => setActive("Casa")}
          className={`rounded-full border-4 cursor-pointer border-black dark:border-gold ${
            active === "Casa" ? "md:w-32 w-14" : "md:w-24 w-10"
          }  `}
        />
      </div>
      {active && (
        <div className="md:flex gap-8">
          <div className="flex flex-col">
            <Card
              imageOnRight
              title={CompanyDescriptions()[active].jobTitle}
              image={getIllustration()}
            >
              <p>{CompanyDescriptions()[active].company}</p>
              <p>{CompanyDescriptions()[active].period}</p>
            </Card>
            <Card
              title={t("achievements")}
              image={<Trophy width={150} height={150} />}
            >
              <ul>
                {CompanyDescriptions()[active].achievements.map(
                  (achievement: string) => (
                    <li
                      className=" bg-turquoise mb-2 rounded-full flex items-center justify-start  py-1 px-2"
                      key={achievement}
                    >
                      <div className="w-1/6">
                        <div className="w-5 h-5 rounded-full bg-yellow-300 border-black border "></div>
                      </div>

                      <div className="w-5/6">
                        <p
                          style={{ fontSize: 8 }}
                          className="text-xs text-start"
                        >
                          {achievement}
                        </p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </Card>
          </div>
          <Card title={t("technologies")} image={null} imageOnRight>
            <div className="grid grid-cols-3 ml-3 md:ml-0 md:grid-cols-4 gap-4">
              {CompanyDescriptions()[active].techStack.map((tech: string) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
