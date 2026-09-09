import { DownloadIcon } from "@/components/icons";

export const DownloadCVButton = () => {
  const handleClick = () => {
    const pdfUrl = "/Fabio_Guieiro_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Fabio_Guieiro_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 bottom-12 right-8 shadow-2xl rounded-md w-20 h-12 md:h-16 md:w-40 gap-2 bg-tomato text-fieldInk border-b-4 border-r-4 border border-fieldInk flex items-center justify-center active:border hover:bg-tomatoDeep hover:underline hover:underline-offset-2"
    >
      <DownloadIcon size={30} color="currentColor" />
      <p className="font-primary font-bold md:text-base hidden md:block">
        Download CV
      </p>
      <p className="font-primary font-bold md:text-base block md:hidden">CV</p>
    </button>
  );
};
