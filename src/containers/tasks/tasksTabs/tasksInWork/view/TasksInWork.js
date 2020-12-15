import React from "react";

import { makeStyles } from "@material-ui/core";

import TaskCard from "../../../view/components/TaskCard/TaskCard";

const useStyles = makeStyles((theme) => ({
  inWorksWrapper: {},
}));

const TasksInWork = ({ tasks }) => {
  const classes = useStyles();
  return (
    <div className={classes.inWorksWrapper}>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TasksInWork;
