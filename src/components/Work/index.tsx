import { AppCasa } from "../../../public/images/AppCasa";
import { AppQueima } from "../../../public/images/AppQueima";
import { AppBtix } from "../../../public/images/AppBtix";
import { AppInter } from "../../../public/images/AppInter";
import { AppForum } from "../../../public/images/AppForum";

export const Work = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-amber-100">
      <h1 className="font-secondary text-6xl self-start ml-4 mt-4 text-tomato md:ml-14">
        Projects
      </h1>
      <div className="w-11/12 h-auto grid md:grid-cols-3  gap-x-8 ">
        <div className="border-black p-2 border-2 mt-4 w-full h-auto">
          <a
            target="_blank"
            href={
              "https://br.lgappstv.com/main/tvapp/detail?appId=1234964&catCode1=&moreYn=N&cateYn=N&orderType=0&headerName=&appRankCode=&sellrUsrNo="
            }
          >
            <AppCasa />
            <p className="font-primary mt-2 text-l">Casa do Saber +</p>
          </a>
        </div>

        <div className="border-black p-2 border-2 mt-4 w-full h-auto">
          <a target="_blank" href={"https://btix.app/"}>
            <AppBtix />
            <p className="font-primary mt-2 text-l">btix.app</p>
          </a>
        </div>

        <div className="border-black p-2 border-2 mt-4 w-full h-auto">
          <a target="_blank" href={"https://contadigital.inter.co/"}>
            <AppInter />
            <p className="font-primary mt-2 text-l">Inter Empresas</p>
          </a>
        </div>

        <div className="border-black p-2 border-2 mt-4 w-full h-auto mb-4">
          <a
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=com.queimadiaria.tv&hl=pt_BR"
            }
          >
            <AppQueima />
            <p className="font-primary mt-2 text-l">Queima Diária</p>
          </a>
        </div>

        <div className="border-black p-2 border-2 mt-4 w-full h-auto mb-4">
          <a target="_blank" href={"https://digital.editoraforum.com.br/"}>
            <AppForum />
            <p className="font-primary mt-2 text-l">Forum Digital</p>
          </a>
        </div>
      </div>
    </div>
  );
};
