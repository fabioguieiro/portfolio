import Image from "next/image";

import { TSizedImageProps } from "./types";

export function GreatWolf({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/greatwolf_logo.webp"
      alt="Great Wolf Lodge logo"
      width={width}
      height={height}
    />
  );
}
