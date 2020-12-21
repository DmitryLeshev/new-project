import {
  SCREENS_GET_USERS,
  SCREENS_GET_SELECTED_USER,
  SCREENS_GET_LOADED_PAGE,
  SCREENS_LOADING_SCREENSHOTS_PACK,
  SCREENS_ADD_SCREENSHOTS_PACK,
  SCREENS_LOADED,
  SCREENS_ERROR,
  SCREENS_RESET,
  SCREENS_RESET_DATA,
  SCREENS_DATE_FILTER,
  SCREENS_ADD_FULLY_SCREENSHOT,
} from "./actionsTypes";

import DevicesService from "../../devicesService";
const devicesService = new DevicesService();

// SCREENS
const getScreenshotsPack = (screenshots) => {
  let newPackScreenshots = [];
  Object.keys(screenshots).forEach((screenshotKey) => {
    const newScreenshot = {
      id: screenshotKey,
      date: new Date(screenshotKey * 1000).toLocaleDateString(),
      time: new Date(screenshotKey * 1000).toLocaleTimeString(),
      img: screenshots[screenshotKey],
    };
    newPackScreenshots.push(newScreenshot);
  });
  return newPackScreenshots.reverse();
};

export function screensResetData() {
  return {
    type: SCREENS_RESET_DATA,
  };
}

export function screensGetUsers(users) {
  return {
    type: SCREENS_GET_USERS,
    payload: users,
  };
}

export function screensGetSelectedUser(selectedUser) {
  return {
    type: SCREENS_GET_SELECTED_USER,
    payload: selectedUser,
  };
}

export function screensChangeSelectedUser(id, selectedUser) {
  return async (dispatch) => {
    dispatch(screensResetData());
    dispatch(screensGetSelectedUser(selectedUser));
    dispatch(getDetailsScreens(id));
  };
}

export function screensGetLoadedPage(page) {
  return {
    type: SCREENS_GET_LOADED_PAGE,
    payload: page,
  };
}

export function screensLoadingScreenshotsPack() {
  return {
    type: SCREENS_LOADING_SCREENSHOTS_PACK,
  };
}

export function screensAddScreenshotsPack(screenshotsPack) {
  return {
    type: SCREENS_ADD_SCREENSHOTS_PACK,
    payload: screenshotsPack,
  };
}

export function screensLoaded() {
  return {
    type: SCREENS_LOADED,
  };
}

export function screensError() {
  return {
    type: SCREENS_ERROR,
  };
}

export function screensReset() {
  return {
    type: SCREENS_RESET,
  };
}

export function getDetailsScreens(id, selectedUserValue = 0) {
  return async (dispatch, getState) => {
    try {
      let {
        loaded,
        loadedPage,
        selectedUser,
        users,
        dateFilter,
      } = getState().combineDevices.screens;
      if (!loaded) {
        // loadedPage = loadedPage + 1
        dispatch(screensLoadingScreenshotsPack());
        const res = await devicesService.getDeviceDetailsScreenshots(
          id,
          loadedPage + 1,
          selectedUser,
          dateFilter.dateStart,
          dateFilter.dateEnd
        );
        if (res.status) {
          const responseScreenshots = res.msg.images;
          const responseUsers = res.msg.users;
          if (!responseScreenshots) {
            console.log("Cкриншоты загружены");
            return dispatch(screensLoaded());
          }
          const screenshotsPack = getScreenshotsPack(responseScreenshots);

          if (!users) {
            dispatch(screensGetUsers(responseUsers));
          }

          if (!selectedUser) {
            dispatch(screensGetSelectedUser(responseUsers[selectedUserValue]));
          }

          dispatch(screensGetLoadedPage(loadedPage + 1));
          dispatch(screensAddScreenshotsPack(screenshotsPack));
        } else {
          console.log("Скринов нету");
          dispatch(screensLoaded());
        }
      } else {
        console.log("Все скриншоты загружены");
        dispatch(screensLoaded());
      }
    } catch (error) {
      console.log("throwing Error", error);
      dispatch(screensError());
    }
  };
}

export function screensGetDateFilter(dateFilter) {
  return {
    type: SCREENS_DATE_FILTER,
    payload: dateFilter,
  };
}

export function screensAddFullyScreenshot(fullyScreenshot) {
  return {
    type: SCREENS_ADD_FULLY_SCREENSHOT,
    payload: fullyScreenshot,
  };
}

export function screensGetFullyScreenshot(id, screenId) {
  return async (dispatch, getState) => {
    try {
      let { selectedUser } = getState().combineDevices.screens;
      const res = await devicesService.getDeviceDetailsScreenshotById(
        id,
        screenId,
        selectedUser
      );
      if (!res.msg) {
        console.log("Беда! Нету скрина");
        return dispatch(screensError());
      }
      dispatch(screensAddFullyScreenshot(res.msg));
    } catch (error) {
      console.log("throwing Error", error);
      dispatch(screensError());
    }
  };
}
