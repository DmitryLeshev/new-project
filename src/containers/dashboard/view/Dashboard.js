import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { Page } from "@components";
import { Header, ReactVis, ReactVis2, ReactVis3 } from "./components";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    padding: theme.spacing(0, 3),
  },
}));

const DashboardView = (props) => {
  const classes = useStyles();

  return (
    <Page className={classes.dashboard} title="Главная" scroll>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ReactVis />
          <ReactVis2 />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReactVis3 />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardView;
