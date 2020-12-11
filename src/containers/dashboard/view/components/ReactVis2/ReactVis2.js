import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

import useStyles from "./styles";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

const ReactVis2 = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} component={Paper} elevation={4}>
      <Typography variant="h2" gutterBottom>
        Оценка критичности уязвимостей
      </Typography>
      <Typography variant="h5" gutterBottom>
        Вариант 2
      </Typography>

      <Divider className={classes.divider} />

      <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={700} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          data={[
            { x: "Что-то 1", y: 10 },
            { x: "Что-то 2", y: 5 },
            { x: "Что-то 3", y: 15 },
            { x: "Что-то 4", y: 9 },
            { x: "Что-то 5", y: 20 },
          ]}
        />
        <VerticalBarSeries
          data={[
            { x: "Что-то 1", y: 12 },
            { x: "Что-то 2", y: 2 },
            { x: "Что-то 3", y: 15 },
            { x: "Что-то 4", y: 3 },
            { x: "Что-то 5", y: 6 },
          ]}
        />
      </XYPlot>
    </Grid>
  );
};

export default ReactVis2;
