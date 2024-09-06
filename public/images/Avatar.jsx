import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src={`/untitled.png`}
      alt={"A portrait of me"}
      width="400"
      height="400"
    />
  );
}
