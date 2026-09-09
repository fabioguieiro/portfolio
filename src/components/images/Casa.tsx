import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Casa({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/casa_logo.webp"
      alt="Casa do Saber logo"
      width={width}
      height={height}
    />
  );
}
