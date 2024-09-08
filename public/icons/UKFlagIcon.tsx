import Image from "next/image";

export function UKFlagIcon({ ...props }) {
  return (
    <Image
      {...props}
      src={`/united-kingdom.png`}
      alt={"UK flag"}
      width={30}
      height={30}
    />
  );
}
