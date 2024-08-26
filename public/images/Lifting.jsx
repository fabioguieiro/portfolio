import Image from "next/image";

export function Lifting({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/lifting.png`}
      alt={"illustration of a wheight lifting wheight"}
      width={width}
      height={height}
    />
  );
}
