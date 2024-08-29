import Image from "next/image";

export function TizenIcon({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/tizen.png`}
      alt={"logo do Inter"}
      width={width}
      height={height}
    />
  );
}
