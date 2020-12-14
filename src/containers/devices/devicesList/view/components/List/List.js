import React from "react";
import {
  Divider,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Loader from "@src/components/Loader/Loader";
import CustomScrollbars from "@src/components/CustomScrollbars/CustomScrollbars";
import Item from "./Item";
import transformationDevices from "./transformationDevices";

const useStyles = makeStyles((theme) => ({
  list: {
    height: theme.devices.listHeight,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(3),
  },
  textSecondary: {
    color: theme.palette.success.main,
  },
  details: {
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  active: {
    boxShadow: `inset -4px 0px 0px ${theme.palette.primary.main}`,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  unread: {
    marginTop: 2,
    padding: 2,
    height: 18,
    minWidth: 18,
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

const DevicesList = ({ devices, selectedDevice }) => {
  const classes = useStyles();
  const listSubheader = "";
  let renderDevices;

  if (devices) {
    renderDevices = transformationDevices(devices, selectedDevice);
  }

  return (
    <List
      className={classes.list}
      disablePadding
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography variant="h5">{listSubheader}</Typography>
          <Divider className={classes.divider} />
        </ListSubheader>
      }
    >
      {renderDevices ? (
        <CustomScrollbars>
          {renderDevices.map((device) => {
            const { id, textPrimary, textSecondary, icon, active } = device;
            return (
              <Item
                key={id}
                id={id}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                icon={icon}
                active={active}
              />
            );
          })}
        </CustomScrollbars>
      ) : (
        <Loader />
      )}
    </List>
  );
};

export default DevicesList;
