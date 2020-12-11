import React from "react";

import { makeStyles } from "@material-ui/styles";

import Filter from "./components/Filter/Filter";
import List from "./components/List/List";

const useStyles = makeStyles((theme) => ({
  devicesBar: {
    position: "relative",
    zIndex: 900,
    minWidth: `${theme.drawer.width + 50}px`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    overflow: "auto",
    height: "100%",
  },
}));

const DevicesList = ({ devices, id }) => {
  const classes = useStyles();
  return (
    <div className={classes.devicesBar}>
      <Filter />
      <List devices={devices} selectedDevice={id} />
    </div>
  );
};

export default DevicesList;
