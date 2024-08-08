import Image from "next/image";

export function Casa({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/casa_logo.png`}
      alt={"logo da Casa do saber"}
      width={width}
      height={height}
    />
  );
}
