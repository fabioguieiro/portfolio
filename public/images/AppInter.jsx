import Image from "next/image";

export function AppInter({ ...props }) {
  return (
    <Image
      style={{ borderRadius: 15 }}
      {...props}
      src={`/InterApp.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
