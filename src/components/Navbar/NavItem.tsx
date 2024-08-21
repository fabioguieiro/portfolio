import { TNavItemsProps } from "./types";

export const NavItem = ({ name }: TNavItemsProps) => {
  return (
    <button className="px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold">
      {name}
    </button>
  );
};
