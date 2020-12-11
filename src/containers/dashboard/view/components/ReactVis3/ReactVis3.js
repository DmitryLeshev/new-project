import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries,
} from "react-vis";

import useStyles from "./styles";

import { Grid, Paper, Divider, Typography } from "@material-ui/core";

const ReactVis3 = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} component={Paper} elevation={4}>
      <Typography variant="h2" gutterBottom>
        Эффективность работы
      </Typography>

      <Divider className={classes.divider} />

      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          className="area-elevated-series-1"
          color="#79c7e3"
          data={[
            { x: 1, y: 10, y0: 1 },
            { x: 2, y: 25, y0: 5 },
            { x: 3, y: 15, y0: 3 },
          ]}
        />
        <AreaSeries
          className="area-elevated-series-2"
          color="#12939a"
          data={[
            { x: 1, y: 5, y0: 6 },
            { x: 2, y: 20, y0: 11 },
            { x: 3, y: 10, y0: 9 },
          ]}
        />
        <LineMarkSeries
          className="area-elevated-line-series"
          data={[
            { x: 1, y: 5.5 },
            { x: 2, y: 15 },
            { x: 3, y: 9 },
          ]}
        />
      </XYPlot>
    </Grid>
  );
};

export default ReactVis3;
