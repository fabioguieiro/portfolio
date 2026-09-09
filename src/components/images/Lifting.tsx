import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Lifting({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/lifting.webp"
      alt="Illustration of a weight lifting weight"
      width={width}
      height={height}
    />
  );
}
