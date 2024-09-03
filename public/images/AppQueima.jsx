import Image from "next/image";

export function AppQueima({ ...props }) {
  return (
    <Image
      {...props}
      src={`/QueimaApp.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
