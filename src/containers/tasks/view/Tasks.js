import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Page } from "@components";

import RightBar from "./components/RightBar/RightBar";
import TabsBar from "./components/TabsBar/TabsBar";

const useStyles = makeStyles((theme) => ({
  tasks: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    marginRight: 300,
    width: "calc(100% - 300px)",
    height: "100%",
  },
  tabsBar: {
    margin: theme.spacing(3, 3, 0),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    zIndex: 1000,
  },
  tabContent: {
    display: "flex",
    flexDirection: "column",
    width: `calc(100% - ${theme.spacing(3)})`,
    margin: theme.spacing(3),
    height: "100%",
  },
  rightBar: {
    position: "fixed",
    top: theme.spacing(3) + 64, // top bar (~64px) + отступ
    right: theme.spacing(3),
    width: `calc(300px - ${theme.spacing(3)}px)`,
    height: `calc(100vh - ${theme.spacing(3) + 64}px)`,
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },
  tabItem: {
    flexGrow: 1,
    margin: theme.spacing(0, 3, 3),
  },
}));

const Tasks = ({
  tabsConfig,
  paramsStatus,
  paramsId,
  selectedTab,
  getTaskById,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page className={classes.tasks} title="Задачи" scroll>
      <TabsBar
        className={classes.tabsBar}
        value={value}
        handleChange={handleChange}
        tabs={tabsConfig}
        selectedTab={selectedTab}
      />
      {tabsConfig.map((tabItem) => {
        const { value, label, id, component: Component } = tabItem;
        if (value !== paramsStatus) return null;
        return (
          <Page
            key={id}
            className={classes.tabItem}
            title={`Задачи: ${label}`}
            scroll={true}
          >
            <Component
              paramsId={paramsId}
              paramsStatus={paramsStatus}
              getTaskById={getTaskById}
            />
          </Page>
        );
      })}
      <RightBar className={classes.rightBar} />
    </Page>
  );
};

export default Tasks;
