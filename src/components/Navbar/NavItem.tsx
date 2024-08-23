import { TNavItemsProps } from "./types";

export const NavItem = ({ name, onClick }: TNavItemsProps) => {
  return (
    <button
      onClick={onClick}
      className="px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold hidden md:flex md:h-full md:items-center"
    >
      {name}
    </button>
  );
};
