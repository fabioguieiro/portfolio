export type TNavItemsProps = {
  name: string;
  onClick?: () => void;
};

export type TNavbarProps = {
  disabledButton?: string;
  isMobileMenuOpen: boolean;
  isDarkModeOn: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  onClickProjects: () => void;
  handleToggleDarkMode: () => void;
  handleChangeLanguage: (language: "pt" | "en") => void;
  currentLanguage: string;
};
