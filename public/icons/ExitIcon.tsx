import { IconProps } from "./types";
export const ExitIcon = ({
  size = 30,
  color = "white",
  onClick,
}: IconProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        className="fill-black dark:fill-gold"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};
