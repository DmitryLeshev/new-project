import React from "react";

import { RightBar, TabsBar, TabContent, TaskCard } from "./components";
import { Page } from "@components";

import useStyles from "./styles";
import { connect } from "react-redux";

import { test } from "@redux/tasks/tasksActions";

// Временно
function TabPanel(props) {
  const { children, value, index, className } = props;

  return (
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
}

const Tasks = (props) => {
  const { test } = props;
  console.log(test);
  console.log("props: ", props);
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "В работе", id: 0 },
    { label: "Отложенные", id: 1 },
    { label: "Отмененные", id: 2 },
    { label: "Завершенные", id: 3 },
  ];

  return (
    <Page className={classes.tasks} title="Задачи" scroll>
      <TabsBar
        className={classes.tabsBar}
        value={value}
        handleChange={handleChange}
        tabs={tabs}
      />

      {tabs.map((tab) => (
        <TabContent
          key={tab.label}
          className={classes.tabContent}
          value={value}
          index={tab.id}
          TabPanel={TabPanel}
          title={tab.label}
        >
          <TaskCard />
        </TabContent>
      ))}

      <RightBar className={classes.rightBar} />
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    test: () => dispatch(test()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
