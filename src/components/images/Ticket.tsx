import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Tickets({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/tickets.webp"
      alt="Illustration of two cinema tickets"
      width={width}
      height={height}
    />
  );
}
