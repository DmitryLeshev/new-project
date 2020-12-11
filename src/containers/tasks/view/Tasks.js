import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Page } from "@components";
import {
  RightBar,
  TabsBar,
  TabContent,
  TaskCard,
  TabPanel,
} from "./components";

const useStyles = makeStyles((theme) => ({
  tasks: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2, 3),
  },
  tabsBar: {
    width: "70%",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },
  tabContent: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height: "100%",
  },
  rightBar: {
    position: "absolute",
    right: theme.spacing(3),
    width: "27%",
    height: `calc(100% - ${theme.spacing(4)}px)`,
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },
}));

const Tasks = ({ tabs }) => {
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
        tabs={tabs}
      />

      {tabs.map((tab) => {
        const { label, id, component: Component } = tab;
        return (
          <TabContent
            key={label}
            className={classes.tabContent}
            value={value}
            index={id}
            TabPanel={TabPanel}
            title={label}
          >
            <Component />
            {/* <TaskCard /> */}
          </TabContent>
        );
      })}

      <RightBar className={classes.rightBar} />
    </Page>
  );
};

export default Tasks;
