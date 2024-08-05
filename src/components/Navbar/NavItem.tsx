import { TNavItemsProps } from "./types";

export const NavItem = ({ name }: TNavItemsProps) => {
  return (
    <button className="px-8 text-xl border-r-4 font-josefin border-black hover:underline">
      {name}
    </button>
  );
};
