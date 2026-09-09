import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Pizza({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/pizza.webp"
      alt="Illustration of a pizza"
      width={width}
      height={height}
    />
  );
}
