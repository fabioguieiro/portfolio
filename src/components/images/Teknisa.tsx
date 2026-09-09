import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Teknisa({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/teknisa_logo.webp"
      alt="Teknisa logo"
      width={width}
      height={height}
    />
  );
}
