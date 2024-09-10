import { DownloadIcon } from "../../../public/icons/DownloadIcon";

export const DownloadCVButton = () => {
  const handleClick = () => {
    const pdfUrl = "/Fabio_Guieiro_CV(eng).pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Fabio_Guieiro_CV(eng).pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 bottom-12 right-8 shadow-2xl rounded-md w-20 h-12 md:h-16 md:w-40 gap-2 bg-tomato border-b-4 border-r-4 border border-black flex items-center justify-center active:border hover:bg-orange-600 hover:underline hover:underline-offset-2"
    >
      <DownloadIcon size={30} color="black" />
      <p className="font-primary text-black font-bold text- md:text-base hidden md:block">
        Download CV
      </p>
      <p className="font-primary text-black font-bold text- md:text-base block md:hidden">
        CV
      </p>
    </button>
  );
};
