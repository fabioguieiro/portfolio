export type TSideMenuProps = {
  isDarkModeOn: boolean;
  currentLanguage: string;
  handleProjectClick: () => void;
  handleToggleDarkMode: () => void;
  handleChangeLanguage: (language: "en" | "pt") => void;
};
