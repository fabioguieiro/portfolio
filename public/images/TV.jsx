import Image from "next/image";

export function TV({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/tv.png`}
      alt={"illustration of a tv"}
      width={width}
      height={height}
    />
  );
}
