import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  tabsBar: {
    width: `calc(100% - ${theme.spacing(6)}px)`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    margin: theme.spacing(0, 3),
  },
}));

const TabsBar = (props) => {
  const { tabs, id, getSelectedTab } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const [value, setValue] = React.useState(getSelectedTab());

  useEffect(() => {
    setValue(getSelectedTab());
  }, [getSelectedTab, id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      className={classes.tabsBar}
      position="static"
      color="default"
      component="div"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tabDetails) => (
          <Tab
            key={tabDetails.value}
            label={t(`device-page.${tabDetails.i18nkey}`)}
            component={Link}
            to={`/devices/${id}/${tabDetails.value}`}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TabsBar;
