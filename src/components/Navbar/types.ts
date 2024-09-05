export type TNavItemsProps = {
  name: string;
  onClick?: () => void;
};

export type TNavbarProps = {
  disabledButton?: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  onClickProjects: () => void;
};
