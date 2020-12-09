import { createMuiTheme } from "@material-ui/core/styles";

import typography from "../typography";
import devices from "../devices";

import paletteLight from "./paletteLight";
import paletteDark from "./paletteDark";

const testThemeLight = createMuiTheme({
  name: "Test Theme Light",
  drawer: {
    width: 270,
    transition: "0.2s ease-out",
  },
  palette: {
    ...paletteLight,
  },
  typography,
  devices,
});

const testThemeDark = createMuiTheme({
  name: "Test Theme Dark",
  drawer: {
    width: 270,
    transition: "0.2s ease-out",
  },
  palette: {
    ...paletteDark,
  },
  typography,
  devices,
});

export { testThemeLight, testThemeDark };
