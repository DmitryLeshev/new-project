import React, { useState } from "react";

import {
  makeStyles,
  IconButton,
  GridListTileBar,
  GridListTile,
  GridList,
  Backdrop,
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  imgWrapper: {
    maxWidth: 1400,
    height: "auto",
  },
  fullyScreenshot: {
    width: "100%",
  },
}));

const ScreenList = ({
  screenshots,
  loading,
  appendItems,
  getFullyScreenshot,
  fullyScreenshot,
}) => {
  const classes = useStyles();

  const [openScreenFull, setOpenScreenFull] = useState(false);

  const openScreen = () => {
    setOpenScreenFull(true);
  };
  const closeScreen = () => {
    setOpenScreenFull(false);
  };
  const screenshotHandler = (id) => {
    openScreen();
    getFullyScreenshot(id);
  };
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
            <GridListTile
              key={index}
              onClick={() => screenshotHandler(screenshot.id)}
            >
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
      <Backdrop
        className={classes.backdrop}
        open={openScreenFull}
        onClick={closeScreen}
      >
        <div className={classes.imgWrapper}>
          <img
            className={classes.fullyScreenshot}
            onClick={closeScreen}
            src={`data:image/png;base64,${fullyScreenshot}`}
            alt="screen"
          />
        </div>
      </Backdrop>
    </div>
  );
};

export default ScreenList;
