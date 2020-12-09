import React from "react";

import useStyles from "./styles";

import { Typography } from "@material-ui/core";
import clsx from "clsx";

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
