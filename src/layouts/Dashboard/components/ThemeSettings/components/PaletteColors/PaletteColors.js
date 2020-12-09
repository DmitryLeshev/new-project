import React from "react";

import { ColorBox } from "./components";

import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const primaryPurple = "primaryPurple";
const primaryBlue = "primaryBlue";

const PaletteColors = (props) => {
  const { switchTheme } = props;
  const classes = useStyles();

  const boxs = [
    { color: primaryPurple, themeName: "default" },
    { color: primaryBlue, themeName: "test" },
  ];

  function renderColorBox() {
    return boxs.map((box) => {
      return (
        <ColorBox
          key={box.themeName}
          color={box.color}
          themeName={box.themeName}
          switchTheme={switchTheme}
        />
      );
    });
  }

  return (
    <div className={classes.paletteColors}>
      <Typography className={classes.paletteColorsTitle} variant="h5">
        Основные цвета палитры
      </Typography>

      <ul className={classes.paletteColorsList}>{renderColorBox()}</ul>
    </div>
  );
};

export default PaletteColors;
