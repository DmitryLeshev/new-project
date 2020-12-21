import React from "react";

import { makeStyles } from "@material-ui/core";

import Page from "@src/components/Page/Page";

import DevicesPlaceholder from "./components/DevicesPlaceholder";
import DevicesTabsNavigation from "./components/DevicesTabsNavigation";
import DevicesDetails from "./components/DevicesDetails";
import DevicesNotProtected from "./components/DevicesNotProtected";

const useStyles = makeStyles((theme) => ({
  devices: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  tabItem: {
    flexGrow: 1,
    margin: theme.spacing(0, 3),
  },
}));

const DevicesTabs = ({ device, id, tab, tabsConfig, getSelectedTab }) => {
  const classes = useStyles();

  if (!id || !tab) return <DevicesPlaceholder />;

  if (device && !device.isProtected) {
    return (
      <Page className={classes.devices} title="Устройство не защищено">
        <DevicesDetails device={device} />
        <DevicesNotProtected />
      </Page>
    );
  }

  return (
    <Page className={classes.devices} title="Устройства">
      <DevicesDetails device={device} />
      <DevicesTabsNavigation
        tabs={tabsConfig}
        id={id}
        getSelectedTab={getSelectedTab}
      />
      {tabsConfig.map((tabConfig) => {
        const { value, label, component: Component } = tabConfig;
        if (value === tab) {
          return (
            <Page
              key={tabConfig.id}
              className={classes.tabItem}
              title={`Устройства: ${label}`}
              scroll={tabConfig.scroll}
            >
              <Component id={id} />
            </Page>
          );
        } else return null;
      })}
    </Page>
  );
};

export default DevicesTabs;
