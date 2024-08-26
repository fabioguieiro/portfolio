import Image from "next/image";

export function Computer({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/computer.png`}
      alt={"illustration of a computer"}
      width={width}
      height={height}
    />
  );
}
