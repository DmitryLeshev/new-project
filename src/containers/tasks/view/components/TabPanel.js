import React from "react";

const TabPanel = ({ children, value, index, className }) => (
  <div
    style={{ height: "100%" }}
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-auto-tabpanel-${index}`}
    aria-labelledby={`scrollable-auto-tab-${index}`}
  >
    {value === index && <div className={className}> {children}</div>}
  </div>
);

export default TabPanel;
