import Image from "next/image";

import { TSizedImageProps } from "../../images/types";

export function TizenIcon({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/tizen.webp"
      alt="Tizen logo"
      width={width}
      height={height}
    />
  );
}
