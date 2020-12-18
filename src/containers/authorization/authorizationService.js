import query from "@assets/utils/query";

class AuthorizationService {
  getAuthStatus = async () => {
    const res = await query("auth/status");
    // console.log("getAuthStatus res: ", res);
    if (res) {
      return true;
    } else {
      return false;
    }
  };

  loginAuth = async (login, password) => {
    // console.log("loginAuth start");
    const res = await query("auth/login", { login, password });
    console.log("loginAuth res: ", res);
    // console.log("loginAuth end");
    return res;
    // return await query("auth/login", { login, password });
  };

  logoutAuth = async () => {
    // console.log("logoutAuth start");
    const res = await query("auth/logout");
    console.log("logoutAuth res: ", res);
    // console.log("logoutAuth end");
    return res;
    // return await query("auth/logout");
  };
}

export default AuthorizationService;

// const authorizationService = new AuthorizationService();
// authorizationService.loginAuth("admin", "123456");
