import React from "react";

const TasksInWork = ({ tasks }) => {
  return (
    <div>
      <h1>TasksInWork</h1>
      {tasks.map((task) => {
        return <h2>{task.id}</h2>;
      })}
    </div>
  );
};

export default TasksInWork;
