import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Trophy({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      className="w-full h-full"
      {...props}
      src="/trophy.webp"
      alt="Illustration of a trophy"
      width={width}
      height={height}
    />
  );
}
