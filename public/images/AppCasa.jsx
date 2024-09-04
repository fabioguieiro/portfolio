import Image from "next/image";

export function AppCasa({ ...props }) {
  return (
    <Image
      {...props}
      src={`/casa-do-saber-app.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
