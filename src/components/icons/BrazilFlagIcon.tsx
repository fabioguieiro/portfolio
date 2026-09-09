import Image from "next/image";

import { TImageProps } from "../images/types";

export function BrazilFlagIcon({ ...props }: TImageProps) {
  return (
    <Image
      {...props}
      src="/brazil.webp"
      alt="Brazilian flag"
      width={30}
      height={30}
    />
  );
}
