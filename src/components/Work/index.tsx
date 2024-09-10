import { AppCasa } from "../../../public/images/AppCasa";
import { AppQueima } from "../../../public/images/AppQueima";
import { AppBtix } from "../../../public/images/AppBtix";
import { AppInter } from "../../../public/images/AppInter";
import { AppForum } from "../../../public/images/AppForum";

export const Work = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-amber-100">
      <h1 className="font-secondary text-8xl self-start ml-4 mt-4 text-tomato md:ml-14">
        Projects
      </h1>
      <div className="w-11/12 h-auto grid md:grid-cols-3 gap-x-4 my-4">
        <div className="mt-4 w-full h-48 md:h-60 ">
          <a
            target="_blank"
            href={
              "https://br.lgappstv.com/main/tvapp/detail?appId=1234964&catCode1=&moreYn=N&cateYn=N&orderType=0&headerName=&appRankCode=&sellrUsrNo="
            }
          >
            <AppCasa className="grayscale hover:grayscale-0" />
          </a>
        </div>

        <div className="mt-4 w-full h-48 md:h-60 ">
          <a target="_blank" href={"https://btix.app/"}>
            <AppBtix className="grayscale hover:grayscale-0" />
          </a>
        </div>

        <div className="mt-4 w-full h-48 md:h-60 ">
          <a target="_blank" href={"https://contadigital.inter.co/"}>
            <AppInter className="grayscale hover:grayscale-0" />
          </a>
        </div>
        <div className="mt-4 w-full h-48 md:h-60 ">
          <a
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=com.queimadiaria.tv&hl=pt_BR"
            }
          >
            <AppQueima className="grayscale hover:grayscale-0" />
          </a>
        </div>

        <div className="mt-4 w-full h-48 md:h-60 ">
          <a target="_blank" href={"https://digital.editoraforum.com.br/"}>
            <AppForum className="grayscale hover:grayscale-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
