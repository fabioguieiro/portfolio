import Image from "next/image";

export function Inter({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/inter_logo.png`}
      alt={"logo do Inter"}
      width={width}
      height={height}
    />
  );
}
