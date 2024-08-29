import Image from "next/image";

export function Trophy({ width = 240, height = 240 }) {
  return (
    <Image
      className="w-full h-full"
      src={`/trophy.png`}
      alt={"illustration of a trophy"}
      width={width}
      height={height}
    />
  );
}
