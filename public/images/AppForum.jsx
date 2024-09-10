import Image from "next/image";

export function AppForum({ ...props }) {
  return (
    <div className="relative">
      <Image
        style={{ borderRadius: 15 }}
        {...props}
        src={`/ForumApp.png`}
        alt={"logo da Versa"}
        width={1000}
        height={1000}
      />
      <div className="absolute top-6 right-2 w-1/2 h-1/2 md:h-full  ">
        <p className="text-right text-amber-100 font-bebas font-bold text-5xl md:text-7xl">
          Forum Digital
        </p>
      </div>
    </div>
  );
}
