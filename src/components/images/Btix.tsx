import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Btix({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/btix_logo.webp"
      alt="BTIX logo"
      width={width}
      height={height}
    />
  );
}
