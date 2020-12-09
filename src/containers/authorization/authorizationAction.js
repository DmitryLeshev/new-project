import { LOG_IN, LOG_OUT } from "./authorizationActionTypes";

import AuthorizationService from "./authorizationService";
const authorizationService = new AuthorizationService();

export function logIn() {
  return {
    type: LOG_IN,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function userCheckStatus() {
  return async (dispatch) => {
    const userStatus = await authorizationService.getAuthStatus();
    if (userStatus) {
      dispatch(logIn());
    } else {
      dispatch(logOut());
    }
  };
}

export function userLogsIn(login, password) {
  return async (dispatch) => {
    const res = await authorizationService.loginAuth(login, password);
    if (res === "success") {
      console.log("Авторизация прошла успешно");
      dispatch(logIn());
    } else {
      console.error("Возникла ошибка в аторизации");
    }
  };
}

export function userLogsOut() {
  return async (dispatch) => {
    const logoutStatus = await authorizationService.logoutAuth();
    if (logoutStatus) {
      dispatch(logOut());
    }
  };
}
