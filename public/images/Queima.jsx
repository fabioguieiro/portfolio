import Image from "next/image";

export function Queima({ ...props }) {
  return (
    <Image
      {...props}
      src={`/queima_logo.png`}
      alt={"logo da Queima Diária"}
      width={64}
      height={64}
    />
  );
}
