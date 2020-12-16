import React from "react";
import { Link } from "react-router-dom";

import { Tab, Tabs } from "@material-ui/core";

const TabsBar = (props) => {
  const { tabs, selectedTab, className } = props;

  const [value, setValue] = React.useState(selectedTab);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className={className}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
      variant="scrollable"
      scrollButtons="auto"
    >
      {tabs.map((tabItem) => (
        <Tab
          key={tabItem.value}
          label={tabItem.label}
          component={Link}
          to={`/tasks/${tabItem.value}`}
        />
      ))}
    </Tabs>
  );
};
// const { value, handleChange, tabs, className } = props;
// return (
//   <Tabs
//     className={className}
//     value={value}
//     onChange={handleChange}
//     indicatorColor="primary"
//     textColor="primary"
//     variant="scrollable"
//     scrollButtons="auto"
//     aria-label="scrollable auto tabs example"
//   >
//     {tabs.map((tab) => (
//       <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} />
//     ))}
//   </Tabs>
// );

export default TabsBar;
