import { makeStyles } from "@material-ui/styles";

import { purple, blue } from "@material-ui/core/colors";

const primaryPurple = purple[500];
const primaryBlue = blue[800];

const useStyles = makeStyles((theme) => ({
  paletteColorsListItem: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 0),
    cursor: "pointer",
  },
  paletteColorBox: {
    width: "100%",
    height: 40,
  },
  primaryBlue: {
    backgroundColor: primaryPurple,
  },
  primaryPurple: {
    backgroundColor: primaryBlue,
  },
}));

export default useStyles;
