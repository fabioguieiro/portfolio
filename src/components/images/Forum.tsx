import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Forum({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/forum_logo.webp"
      alt="Editora Fórum logo"
      width={width}
      height={height}
    />
  );
}
