import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={`/avatar.png`}
      alt={"A portrait of me"}
      width="240"
      height="240"
    />
  );
}
