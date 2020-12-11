import React from "react";

import useStyles from "./styles";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} component={Paper} elevation={4}>
      <Typography component="h2" gutterBottom variant="overline">
        Главная
      </Typography>
      <Divider className={classes.divider} />
      <Typography component="h1" gutterBottom variant="h3">
        Доброе утро, Mister Rico
      </Typography>
      <Typography variant="subtitle1">Вот что происходит</Typography>
    </Grid>
  );
};

export default Header;
