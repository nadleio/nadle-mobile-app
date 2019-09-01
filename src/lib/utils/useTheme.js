import { useState } from "react";

import colors from "../../theme";

const colorMap = {
  LIGHT_MODE: "light",
  DARK_MODE: "dark",
  BLUE_MODE: "blue"
};

const useTheme = () => {
  const [mode, setMode] = useState("LIGHT_MODE");

  const theme = {
    ...colors,
    styled: colors[colorMap[mode]]
  };

  return {
    themeMode: mode,
    setThemeMode: setMode,
    theme
  };
};

export default useTheme;
