import React from "react";

// import useStyles from "./styles";

const TabContent0 = (props) => {
  const { TabPanel, value, index, className, children } = props;
  // const classes = useStyles();
  return (
    <TabPanel value={value} index={index} className={className}>
      {children}
    </TabPanel>
  );
};

export default TabContent0;
