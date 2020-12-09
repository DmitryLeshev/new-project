import query from "@assets/utils/query";

class TasksService {
  getAllTasks = async () => {
    const res = await query("task/list");
    console.log("getAllTasks res: ", res);
  };

  getTaskById = async (id) => {
    const res = await query("task/get", { id: id });
    console.log("getTaskById res: ", res);
  };
}

export default TasksService;
