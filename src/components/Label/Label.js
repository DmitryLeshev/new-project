import React from "react";

import clsx from "clsx";
import useStyles from "./styles";

import { Typography, colors } from "@material-ui/core";

const Label = (props) => {
  const {
    variant = "contained",
    color = colors.grey[600],
    shape = "square",
    children,
    style = {},
    className,
  } = props;

  const classes = useStyles();

  const rootClassName = clsx({
    [classes.root]: true,
    [classes.rounded]: shape === "rounded",
  });

  const finalStyle = { ...style };

  if (variant === "contained") {
    finalStyle.backgroundColor = color;
    finalStyle.color = "#FFF";
  } else {
    finalStyle.border = `1px solid ${color}`;
    finalStyle.color = color;
  }

  return (
    <Typography
      className={clsx(rootClassName, className)}
      style={finalStyle}
      variant="overline"
    >
      {children}
    </Typography>
  );
};

export default Label;
