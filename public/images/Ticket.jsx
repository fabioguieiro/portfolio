import Image from "next/image";

export function Tickets({ width = 240, height = 240 }) {
  return (
    <Image
      src={`/tickets.png`}
      alt={"illustration two cinema tickets"}
      width={width}
      height={height}
    />
  );
}
