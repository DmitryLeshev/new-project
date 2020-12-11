import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

import useStyles from "./styles";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

const ReactVis = () => {
  const classes = useStyles();

  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
    { x: 4, y: 10 },
    { x: 5, y: 9 },
    { x: 6, y: 11 },
  ];

  return (
    <Grid className={classes.root} component={Paper} elevation={4}>
      <Typography variant="h2" gutterBottom>
        Оценка критичности уязвимостей
      </Typography>
      <Typography variant="h5" gutterBottom>
        Вариант 1
      </Typography>

      <Divider className={classes.divider} />

      <XYPlot width={700} height={300}>
        <HorizontalGridLines />
        <LineSeries data={data} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </Grid>
  );
};

export default ReactVis;
