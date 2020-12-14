import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import typography from "../typography";
import devices from "../devices";

const white = "#FFFFFF";
const black = "#000000";

const defaultThemeLight = createMuiTheme({
  name: "Default Theme",
  black,
  white,
  drawer: {
    width: 270,
    transition: "0.2s ease-out",
  },
  palette: {
    type: "light",
    primary: {
      contrastText: white,
      dark: colors.indigo[900],
      main: colors.indigo[500],
      light: colors.indigo[100],
    },
    secondary: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue["A400"],
      light: colors.blue["A400"],
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400],
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
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue["A400"],
      light: colors.blue["A400"],
    },
    secondary: {
      contrastText: white,
      dark: colors.indigo[900],
      main: colors.indigo[500],
      light: colors.indigo[100],
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400],
    },
  },
  typography,
  devices,
});

export { defaultThemeLight, defaultThemeDark };
