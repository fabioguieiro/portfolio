import Image from "next/image";

import { TSizedImageProps } from "../../images/types";

export function StyledComponentsIcon({
  width = 200,
  height = 200,
  ...props
}: TSizedImageProps) {
  return (
    <Image
      {...props}
      src="/styled-components.webp"
      alt="Styled Components logo"
      width={width}
      height={height}
    />
  );
}
