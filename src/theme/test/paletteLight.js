import { colors } from "@material-ui/core";

const primary = colors.amber[400];
const secondary = colors.amber[900];

const white = "#FFFFFF";
const black = "#000000";

const paletteLight = {
  type: "light",
  black,
  white,
  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
};

export default paletteLight;
