import React from "react";

import { makeStyles, Divider } from "@material-ui/core";

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
        <ScreensList
          loading={loading}
          screenshots={screenshots}
          appendItems={appendItems}
        />
      )}
    </div>
  );
};

export default DevicesScreens;
