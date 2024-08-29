import Image from "next/image";

export function Pizza({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/pizza.png`}
      alt={"pizza illustration"}
      width={width}
      height={height}
    />
  );
}
