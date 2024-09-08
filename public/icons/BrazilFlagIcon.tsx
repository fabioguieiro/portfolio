import Image from "next/image";

export function BrazilFlagIcon({ ...props }) {
  return (
    <Image
      {...props}
      src={`/brazil.png`}
      alt={"brazil flag"}
      width={30}
      height={30}
    />
  );
}
