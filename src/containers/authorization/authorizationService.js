import query from "@assets/utils/query";

class AuthorizationService {
  getAuthStatus = async () => {
    const res = await query("auth/status");
    if (res) {
      return true;
    } else {
      return false;
    }
  };

  loginAuth = async (login, password) => {
    return await query("auth/login", { login, password });
  };

  logoutAuth = async () => {
    return await query("auth/logout");
  };
}

export default AuthorizationService;
