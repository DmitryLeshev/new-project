import React from "react";

import {
  makeStyles,
  IconButton,
  GridListTileBar,
  GridListTile,
  GridList,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import Loader from "@src/components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(1, 3),
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ScreenList = ({ screenshots, loading }) => {
  const classes = useStyles();
  console.log("screenshots: ", screenshots);
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5} spacing={8}>
        {screenshots.map((screenshot, index) => (
          <GridListTile key={index}>
            <img
              src={`data:image/png;base64,${screenshot.img}`}
              alt={screenshot.date}
            />
            <GridListTileBar
              titlePosition="bottom"
              title={screenshot.date}
              subtitle={<span>{screenshot.time}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${screenshot.date}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
            {loading && <Loader />}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ScreenList;
