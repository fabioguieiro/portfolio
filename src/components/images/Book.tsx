import Image from "next/image";

import { TSizedImageProps } from "./types";

export function Book({
  width = 240,
  height = 240,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/book.webp"
      alt="Illustration of a book"
      width={width}
      height={height}
    />
  );
}
