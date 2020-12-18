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

// import { Scrollbars } from "react-custom-scrollbars";

import { LazyLoad } from "@src/components";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(1, 3),
    width: "100%",
    height: "calc(100vh - 415px)",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const ScreenList = ({ screenshots, loading, appendItems }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LazyLoad appendItems={appendItems}>
        <GridList
          className={classes.gridList}
          cellHeight={120}
          cols={5}
          spacing={8}
        >
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
      </LazyLoad>
    </div>
  );
};

export default ScreenList;
