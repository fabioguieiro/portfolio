import Image from "next/image";

export function Money({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/money.png`}
      alt={"illustration of a pack of bills running"}
      width={width}
      height={height}
    />
  );
}
