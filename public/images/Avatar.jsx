import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={`/avatar.png`}
      alt={"A portrait of me"}
      width="280"
      height="280"
    />
  );
}
