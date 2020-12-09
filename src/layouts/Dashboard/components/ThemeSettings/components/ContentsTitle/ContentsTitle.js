import React from "react";

import useStyles from "./styles";

import BrushIcon from "@material-ui/icons/Brush";
import { Typography } from "@material-ui/core";

const ContentsTitle = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentsTitle}>
      <BrushIcon className={classes.brushIcon} />
      <Typography className={classes.title} variant="h4">
        Настройки внешнего вида
      </Typography>
    </div>
  );
};

export default ContentsTitle;
