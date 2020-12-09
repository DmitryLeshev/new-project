import { colors } from "@material-ui/core";

const primary = colors.amber[900];
const secondary = colors.amber[800];

const white = "#FFFFFF";
const black = "#000000";

const paletteDark = {
  type: "dark",
  black,
  white,
  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
};

export default paletteDark;
