import React from "react";

import { makeStyles } from "@material-ui/core";

import TaskCard from "../../../view/components/TaskCard/TaskCard";

const useStyles = makeStyles((theme) => ({
  inWorksWrapper: {},
}));

const TasksСompleted = ({ tasks, selectedTask }) => {
  const classes = useStyles();
  return (
    <div className={classes.inWorksWrapper}>
      {tasks &&
        tasks.map((task) => {
          return (
            <TaskCard key={task.id} task={task} selectedTask={selectedTask} />
          );
        })}
    </div>
  );
};

export default TasksСompleted;
