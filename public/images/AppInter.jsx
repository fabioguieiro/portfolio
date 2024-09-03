import Image from "next/image";

export function AppInter({ ...props }) {
  return (
    <Image
      {...props}
      src={`/InterApp.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
