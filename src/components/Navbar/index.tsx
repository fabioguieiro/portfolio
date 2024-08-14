import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";

export const Navbar = () => {
  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between">
      <div className="flex">
        <NavLogo />
        <NavItem name="Projetos" />
        <NavItem name="Trajetoria" />
        <NavItem name="Contato" />
      </div>
      <div className="flex items-center">
        <p className="mr-10">dark / light</p>
        <p className="mr-10">eng / pt-br</p>
      </div>
    </nav>
  );
};
