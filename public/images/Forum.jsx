import Image from "next/image";

export function Forum({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/forum_logo.png`}
      alt={"logo da editora forum"}
      width={width}
      height={height}
    />
  );
}
