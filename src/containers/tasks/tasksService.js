import query from "@assets/utils/query";

export default class TasksService {
  getTasks = async (progressId = 1) => {
    const res = await query("task/list", { progressId });
    console.log("getTasks res: ", res);
    return res;
  };

  getTaskById = async (id, lang = "ru") => {
    const res = await query("task/get", { id, lang });
    console.log("getTaskById res: ", res);
    return res;
  };
}
