import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Computer({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/computer.webp"
      alt="Illustration of a computer"
      width={width}
      height={height}
    />
  );
}
