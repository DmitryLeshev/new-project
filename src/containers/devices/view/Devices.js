import React from "react";

import {
  devicesListLoading,
  deviceDetailsLoading,
} from "@redux/devices/devicesActions";
import { Page } from "@components";
import { DevicesList, DevicesDetails, DevicesPlaceholder } from "./components";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  devices: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
}));

export default styles;

const Devices = () => {
  const classes = useStyles();
  return (
    <Page className={classes.devices} title="Устройства">
      {list && <DevicesList devices={list} selectedDevice={selectedDevice} />}
      {id && list ? (
        <DevicesDetails device={device} id={id} tab={tab} />
      ) : (
        <DevicesPlaceholder />
      )}
    </Page>
  );
};

export default Devices;
