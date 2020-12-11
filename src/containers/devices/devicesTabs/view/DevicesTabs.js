import React from "react";

import Page from "@src/components/Page/Page";

import DevicesPlaceholder from "./components/DevicesPlaceholder";
import DevicesTabsNavigation from "./components/DevicesTabsNavigation";
import DevicesDetails from "./components/DevicesDetails";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  devices: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
}));

const DevicesTabs = ({ device, id, tab }) => {
  const classes = useStyles();
  if (!id || !tab) return <DevicesPlaceholder />;
  return (
    <Page className={classes.device} title="Устройства">
      <DevicesDetails device={device} />
      <DevicesTabsNavigation />
    </Page>
  );
};

export default DevicesTabs;
