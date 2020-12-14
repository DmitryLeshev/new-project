import React from "react";

import ColorBox from "./components/ColorBox";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paletteColors: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  paletteColorsTitle: {
    textAlign: "center",
  },
  paletteColorsList: {
    listStyle: "none",
    margin: 0,
    marginTop: theme.spacing(1),
  },
  paletteColorsListItem: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
  paletteColorBox: {
    width: "100%",
    height: 40,
    backgroundColor: "red",
  },
}));

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
