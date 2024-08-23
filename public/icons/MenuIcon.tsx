import { IconProps } from "./types";
export const MenuIcon = ({
  size = 30,
  color = "white",
  onClick,
}: IconProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        height={size}
        width={size}
        className="fill-black dark:fill-gold"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};
