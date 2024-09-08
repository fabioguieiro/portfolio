export type TSideMenuProps = {
  isDarkModeOn: boolean;
  currentLanguage: string;
  handleCloseMenu: () => void;
  handleProjectClick: () => void;
  handleToggleDarkMode: () => void;
  handleChangeLanguage: (language: "en" | "pt") => void;
};
