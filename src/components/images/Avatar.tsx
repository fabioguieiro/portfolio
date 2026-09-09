import Image from "next/image";

import { TImageProps } from "./types";

export function Avatar({ ...props }: TImageProps) {
  return (
    <Image
      {...props}
      src="/avatar.webp"
      alt="A portrait of me"
      width={360}
      height={360}
      priority
    />
  );
}
