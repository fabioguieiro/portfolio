import Image from "next/image";

import { TImageProps } from "../images/types";

export function UKFlagIcon({ ...props }: TImageProps) {
  return (
    <Image
      {...props}
      src="/united-kingdom.webp"
      alt="United Kingdom flag"
      width={30}
      height={30}
    />
  );
}
