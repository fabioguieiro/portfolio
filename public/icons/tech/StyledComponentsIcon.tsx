import Image from "next/image";

export function StyledComponentsIcon({ width = 200, height = 200, ...props }) {
  return (
    <Image
      {...props}
      src={`/styled-components.png`}
      alt={"logo do Inter"}
      width={width}
      height={height}
    />
  );
}
