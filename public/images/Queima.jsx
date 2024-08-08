import Image from "next/image";

export function Queima({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/queima_logo.png`}
      alt={"logo da Queima Diária"}
      width={width}
      height={height}
    />
  );
}
