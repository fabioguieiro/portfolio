"use client";
import { Versa } from "../../../public/images/Versa";
import { Teknisa } from "../../../public/images/Teknisa";
import { Forum } from "../../../public/images/Forum";
import { Queima } from "../../../public/images/Queima";
import { Inter } from "../../../public/images/Inter";
import { Btix } from "../../../public/images/Btix";
import { Casa } from "../../../public/images/Casa";
import { DashedConnector } from "../DashedConnector";
import { useState } from "react";
import { companyDescriptions } from "./companyDescriptions";

export const Timeline = () => {
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
  return (
    <div className="flex-col h-full w-full py-8 pb-6 bg-cream text-black dark:bg-royal dark:text-gold">
      <div className="justify-center items-center flex">
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
        <p className="w-1/3 h-1/2 self-center font-primary">
          {JSON.stringify(companyDescriptions[active])}
        </p>
      )}
    </div>
  );
};
