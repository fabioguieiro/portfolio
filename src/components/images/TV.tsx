import Image from "next/image";

import { TSizedImageProps } from "./types";

export function TV({ width = 240, height = 240, ...props }: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/tv.webp"
      alt="Illustration of a TV"
      width={width}
      height={height}
    />
  );
}
