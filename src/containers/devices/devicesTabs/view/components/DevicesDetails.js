import React from "react";

import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import LaptopWindowsIcon from "@material-ui/icons/LaptopWindows";
import WifiIcon from "@material-ui/icons/Wifi";

import Loader from "@src/components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  deviceDetails: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    margin: theme.spacing(0, 3, 3),
    padding: theme.spacing(3),
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: theme.spacing(3),
  },
  buttonContainer: {
    marginLeft: "auto",
  },
}));

const DevicesDetails = ({ device }) => {
  const classes = useStyles();
  if (!device) {
    return (
      <div className={classes.deviceDetails}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classes.deviceDetails}>
      <Grid item>
        {device.type === "wifi" ? (
          <WifiIcon className={classes.icon} />
        ) : (
          <LaptopWindowsIcon className={classes.icon} />
        )}
      </Grid>
      <Grid item>
        <Typography variant="h1">{device.name}</Typography>
        <Typography variant="h3">{device.status}</Typography>
      </Grid>
      <Button
        className={classes.buttonContainer}
        variant="outlined"
        color="primary"
        size="large"
      >
        Добавить в белый список
      </Button>
    </div>
  );
};

export default DevicesDetails;
