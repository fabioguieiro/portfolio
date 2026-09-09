import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Venmo({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/venmo_logo.webp"
      alt="Venmo logo"
      width={width}
      height={height}
    />
  );
}
