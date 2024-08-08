import Image from "next/image";

export function Btix({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/btix_logo.png`}
      alt={"logo da btix"}
      width={width}
      height={height}
    />
  );
}
