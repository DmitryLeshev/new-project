import React from "react";

import { purple, blue } from "@material-ui/core/colors";
import { Typography, makeStyles } from "@material-ui/core";

import clsx from "clsx";

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

const ColorBox = (props) => {
  const { color, themeName, switchTheme } = props;
  const classes = useStyles();

  return (
    <li className={classes.paletteColorsListItem}>
      <Typography variant="button">{themeName}</Typography>
      <div
        className={clsx(classes.paletteColorBox, classes[color])}
        onClick={() => switchTheme(themeName)}
      />
    </li>
  );
};

export default ColorBox;
