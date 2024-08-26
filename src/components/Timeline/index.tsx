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
    <div className="flex-col h-full w-full py-8 pb-6 bg-cream text-black dark:bg-royal dark:text-gold flex items-center">
      <div className="w-full px-4 justify-center items-center flex overflow-x-scroll mb-10">
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
        <>
          <div className="bg-cream w-96 h-52 rounded-lg border-black border-2  relative">
            <div className="bg-purple-400 w-full h-4 rounded-t-md border-b-2 border-black flex items-center px-1 gap-0.5">
              <div
                className="rounded-full  w-2 h-2 bg-red-400"
                style={{ border: "solid 1px black" }}
              ></div>
              <div
                className="rounded-full  w-2 h-2 bg-yellow-400"
                style={{ border: "solid 1px black" }}
              ></div>
              <div
                className="rounded-full  w-2 h-2 bg-green-400"
                style={{ border: "solid 1px black" }}
              ></div>
            </div>
            <div className="px-2 py-2">
              <p className="text-xl font-bold">
                {companyDescriptions[active].jobTitle}
              </p>
              <p>{companyDescriptions[active].company}</p>
              <p>{companyDescriptions[active].period}</p>
            </div>
            <div className="absolute right-2 bottom-1">{getIllustration()}</div>
          </div>
          <div className="bg-cream w-96 h-auto rounded-lg border-black border-2 relative mt-4">
            <div className="bg-purple-400 w-full h-4 rounded-t-md border-b-2 border-black flex items-center px-1 gap-0.5">
              <div
                className="rounded-full  w-2 h-2 bg-red-400"
                style={{ border: "solid 1px black" }}
              ></div>
              <div
                className="rounded-full  w-2 h-2 bg-yellow-400"
                style={{ border: "solid 1px black" }}
              ></div>
              <div
                className="rounded-full  w-2 h-2 bg-green-400"
                style={{ border: "solid 1px black" }}
              ></div>
            </div>
            <div className="flex ">
              <div className="h-32 w-1/3 self-center">
                <Trophy width={150} height={150} />
              </div>
              <div className="px-2 w-2/3 py-2">
                <p className="text-xl font-bold mb-3">Achievements</p>
                <ul>
                  {companyDescriptions[active].achievements.map(
                    (achievement) => (
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
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
