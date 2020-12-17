import React from "react";

import { makeStyles, Divider } from "@material-ui/core";

import { LazyLoad } from "@src/components";
import ErrorIndicator from "@src/containers/errors/view/ErrorIndicator";
import { ScreensList, ScreensFilters } from "./components";

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: "border-box",
    // height: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
}));

const DevicesScreens = (props) => {
  const {
    id,
    loading,
    error,
    users,
    selectedUser,
    screenshots,
    screensChangeSelectedUser,
    appendItems,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ScreensFilters
        id={id}
        users={users}
        selectedUser={selectedUser}
        screensChangeSelectedUser={screensChangeSelectedUser}
      />
      <Divider />
      {error ? (
        <ErrorIndicator />
      ) : (
        <LazyLoad test={appendItems}>
          <ScreensList loading={loading} screenshots={screenshots} />
        </LazyLoad>
      )}
    </div>
  );
};

export default DevicesScreens;
