import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Page } from "@components";

import useStyles from "./styles";
import { Typography, Button, useTheme, useMediaQuery } from "@material-ui/core";

const Error404 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page className={classes.root} title="Error 404">
      <Typography align="center" variant={mobileDevice ? "h4" : "h1"}>
        404
      </Typography>

      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined"
        >
          Back to home
        </Button>
      </div>
    </Page>
  );
};

export default Error404;
