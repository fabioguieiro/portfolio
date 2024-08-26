import Image from "next/image";

export function Book({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/book.png`}
      alt={"illustration of a book"}
      width={width}
      height={height}
    />
  );
}
