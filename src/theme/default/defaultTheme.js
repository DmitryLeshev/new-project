import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import typography from "../typography";
import devices from "../devices";

const defaultThemeLight = createMuiTheme({
  name: "Default Theme",
  drawer: {
    width: 270,
    transition: "0.2s ease-out",
  },
  palette: {
    type: "light",
    primary: {
      main: colors.blue["A400"],
    },
    secondary: {
      main: colors.indigo[500],
    },
    error: {
      main: colors.red[600],
    },
  },
  typography,
  devices,
});
const defaultThemeDark = createMuiTheme({
  name: "Default Theme",
  drawer: {
    width: 270,
    transition: "0.2s ease-out",
  },
  palette: {
    type: "dark",
    primary: {
      main: colors.blue["A400"],
    },
    secondary: {
      main: colors.indigo[100],
    },
    error: {
      main: colors.red[400],
    },
  },
  typography,
  devices,
});

export { defaultThemeLight, defaultThemeDark };
