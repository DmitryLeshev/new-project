import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Page } from "@components";

import RightBar from "./components/RightBar/RightBar";
import TabsBar from "./components/TabsBar/TabsBar";
import TabItem from "./components/TabItem/TabItem";
// import CustomScrollbars from "../../../components/CustomScrollbars/CustomScrollbars";

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
    width: `calc(100% - ${theme.spacing(3)})`,
    margin: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
  },
  tabContent: {
    display: "flex",
    flexDirection: "column",
    width: `calc(100% - ${theme.spacing(3)})`,
    margin: theme.spacing(3),

    // margin: theme.spacing(3, 0),
    height: "100%",
  },
  rightBar: {
    // display: "none",
    position: "absolute",
    top: theme.spacing(3),
    right: theme.spacing(3),
    width: `calc(300 - ${theme.spacing(2.5)})`,
    height: `calc(100% - ${theme.spacing(3)}px)`,
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
      {/* <CustomScrollbars> */}
      {tabs.map((tab) => {
        const { label, id, component: Component } = tab;
        return (
          <TabItem
            key={label}
            className={classes.tabContent}
            value={value}
            index={id}
            title={label}
          >
            <Component />
          </TabItem>
        );
      })}
      {/* </CustomScrollbars> */}
      <RightBar className={classes.rightBar} />
    </Page>
  );
};

export default Tasks;
