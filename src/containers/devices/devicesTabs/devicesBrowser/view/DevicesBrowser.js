import React from "react";

import {
  makeStyles,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  browser: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2, 3),
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  button: {
    margin: theme.spacing(3, 0),
  },
  item: {
    justifyContent: "space-between",
  },
}));

const DevicesPorts = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.browser} container>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          Пользователь: DESKTOP-AFIPCH5\klavobit
        </Typography>

        <List>
          <ListItem className={classes.item} divider>
            <Typography variant="body1">browser-name:</Typography>
            <Typography variant="body2">chrome</Typography>
          </ListItem>
          <ListItem className={classes.item} divider>
            <Typography variant="body1">pid:</Typography>
            <Typography variant="body2">8452</Typography>
          </ListItem>
          <ListItem className={classes.item} divider>
            <Typography variant="body1">is-minimized:</Typography>
            <Typography variant="body2">false</Typography>
          </ListItem>
          <ListItem className={classes.item} divider>
            <Typography variant="body1">active-tab-title:</Typography>
            <Typography variant="body2">
              Svelte Material Design Component Framework - Svelte Materialify
            </Typography>
          </ListItem>
          <ListItem className={classes.item} divider>
            <Typography variant="body1">active-tab-url:</Typography>
            <Typography variant="body2">
              svelte-materialify.vercel.app/?ref=madewithsvelte.com
            </Typography>
          </ListItem>
        </List>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
        >
          Показать вкладки
        </Button>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default DevicesPorts;
