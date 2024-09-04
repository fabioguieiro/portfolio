import Image from "next/image";

export function AppBtix({ ...props }) {
  return (
    <Image
      {...props}
      src={`/BtixApp.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
