import Image from "next/image";

export function AppBtix({ ...props }) {
  return (
    <div className="relative">
      <Image
        style={{ borderRadius: 15 }}
        {...props}
        src={`/BtixApp.png`}
        alt={"logo da Versa"}
        width={1000}
        height={1000}
      />
      <div className="absolute top-6 right-2 w-1/2 h-1/2 md:w-1/2 ">
        <p className="text-right text-amber-100 font-bebas font-bold text-5xl md:text-7xl">
          btix
        </p>
        <p className="text-right text-amber-100 font-bebas font-bold text-5xl md:text-7xl">
          .app
        </p>
      </div>
    </div>
  );
}
