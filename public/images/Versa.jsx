import Image from "next/image";

export function Versa({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/versa_logo.jpeg`}
      alt={"logo da Versa"}
      width={width}
      height={height}
    />
  );
}
