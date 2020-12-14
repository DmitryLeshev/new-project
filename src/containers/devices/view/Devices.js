import React from "react";

import { makeStyles } from "@material-ui/core";

import Page from "@src/components/Page/Page";

import DevicesList from "../devicesList/devicesList";
import DevicesTabs from "../devicesTabs/devicesTabs";

const useStyles = makeStyles((theme) => ({
  devices: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
}));

const Devices = () => {
  const classes = useStyles();
  return (
    <Page className={classes.devices} title="Устройства">
      <DevicesList />
      <DevicesTabs />
    </Page>
  );
};

export default Devices;
