import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Queima({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/queima_logo.webp"
      alt="Queima Diária logo"
      width={width}
      height={height}
    />
  );
}
