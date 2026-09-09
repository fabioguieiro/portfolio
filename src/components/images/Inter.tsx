import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Inter({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/inter_logo.webp"
      alt="Banco Inter logo"
      width={width}
      height={height}
    />
  );
}
