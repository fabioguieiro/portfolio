import Image from "next/image";

import { TImageProps } from "./types";

export function AppForum({ ...props }: TImageProps) {
  return (
    <div className="relative">
      <Image
        style={{ borderRadius: 15 }}
        {...props}
        src="/ForumApp.webp"
        alt="Forum Digital project screenshot"
        width={1282}
        height={719}
        sizes="(max-width: 768px) 92vw, 30vw"
      />
      <div className="absolute top-6 right-2 w-1/2 h-1/2 md:h-full  ">
        <p className="text-right text-paper font-bebas font-bold text-5xl md:text-7xl 2xl:text-8xl">
          Forum Digital
        </p>
      </div>
    </div>
  );
}
