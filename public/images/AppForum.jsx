import Image from "next/image";

export function AppForum({ ...props }) {
  return (
    <Image
      {...props}
      src={`/ForumApp.png`}
      alt={"logo da Versa"}
      width={1000}
      height={1000}
    />
  );
}
