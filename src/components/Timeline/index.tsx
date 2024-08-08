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
  const [active, setActive] = useState("");
  return (
    <div className="flex flex-col h-96">
      <div className="w-full flex justify-center items-center my-8">
        <Versa
          onClick={() => setActive("Versa")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Versa" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Teknisa
          onClick={() => setActive("Teknisa")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Teknisa" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Forum
          onClick={() => setActive("Forum")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Forum" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Queima
          onClick={() => setActive("Queima")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Queima" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Inter
          onClick={() => setActive("Inter")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Inter" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Btix
          onClick={() => setActive("Btix")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Btix" ? "border-lime-500" : "border-black"
          }  `}
        />

        <DashedConnector />

        <Casa
          onClick={() => setActive("Casa")}
          width={100}
          height={100}
          className={`rounded-full border-4 cursor-pointer ${
            active === "Casa" ? "border-lime-500" : "border-black"
          }  `}
        />
      </div>
      <p className="w-1/3 h-1/2 self-center font-primary">
        {companyDescriptions[active]}
      </p>
    </div>
  );
};
