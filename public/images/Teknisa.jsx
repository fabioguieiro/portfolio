import Image from "next/image";

export function Teknisa({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/teknisa_logo.png`}
      alt={"logo da Teknisa"}
      width={width}
      height={height}
    />
  );
}
