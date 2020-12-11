import query from "@assets/utils/query";

class TasksService {
  getTasks = async (progressId = 1) => {
    const res = await query("task/list", { progressId });
    console.log("getAllTasks res.msg: ", res.msg);
    return res.msg;
  };

  getTaskById = async (id, lang = "ru") => {
    const res = await query("task/get", { id, lang });
    console.log("getTaskById res: ", res);
    return res;
  };
}

export default TasksService;

// const tasksService = new TasksService();
// tasksService.getTasks();
// tasksService.getTaskById(41);
