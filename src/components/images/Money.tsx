import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Money({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/money.webp"
      alt="Illustration of a stack of bills running"
      width={width}
      height={height}
    />
  );
}
