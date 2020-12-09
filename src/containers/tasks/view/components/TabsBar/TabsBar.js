import React from "react";

// import useStyles from "./styles";
import { Tab, Tabs } from "@material-ui/core";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const TabsBar = (props) => {
  const { value, handleChange, tabs, className } = props;
  // const classes = useStyles();
  return (
    <Tabs
      className={className}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {tabs.map((tab) => (
        <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} />
      ))}
    </Tabs>
  );
};

export default TabsBar;
