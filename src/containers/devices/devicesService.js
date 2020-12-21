import query from "@assets/utils/query";

export default class DevicesService {
  getAllDevices = async () => {
    const res = await query("device/list");
    return res.msg;
  };

  getDevicesCountLicense = async () => {
    const res = await query("device/getCountLicense");
    console.log("getDevicesCountLicense res: ", res);
    return res;
  };

  getDeviceDetailsPrograms = async (id) => {
    const res = await query("deviceInfo/getPrograms", { id });
    return res;
  };

  getDeviceDetailsScreenshots = async (
    id,
    page = 1,
    user = null,
    tstStart = 0,
    tstEnd = 0
  ) => {
    const body = { id, page, user, tstStart, tstEnd };
    const res = await query("deviceInfo/getScreen", body);
    return res;
    // console.log("getDeviceDetailsScreenshots body: ", body);
    // console.log("getDeviceDetailsScreenshots res: ", res);
    // return await query("device/getLanScreen", body);
  };

  getDeviceDetailsScreenshotById = async (id, screenId, user) => {
    const body = { id, screenId, user };
    console.log("getDeviceById body: ", body);
    const res = await query("deviceInfo/getScreenFully", body);
    console.log("getDeviceById res: ", res);
    return res;
  };

  getDeviceDetailsPorts = async (id) => {
    return await query("deviceInfo/getPorts", { id });
  };

  getDeviceDetailsBrowser = async (id, tst = 0) => {
    const body = { id, tst };
    console.log("getDeviceDetailsBrowser body: ", body);
    const res = await query("deviceInfo/getBrowserTabs", body);
    console.log("getDeviceDetailsBrowser res: ", res);
    return res;
  };

  getDeviceDetailsProcesses = async (id) => {
    return await query("deviceInfo/getProcesses", { id });
  };

  getDeviceDetailsResponsible = async (id) => {
    return ["Responsible"];
  };

  getDeviceDetailsLogs = async (id) => {
    return ["logs"];
  };

  getDeviceDetailsEntry = async (id) => {
    return ["entry"];
  };

  getDevice = async (id) => {
    return await query("device/get", { id: id });
  };

  getDevicesWifi = async (id) => {
    return await query("device/getWifi", { id: id });
  };

  getDevicesUsb = async (id) => {
    return await query("device/getUsbDevices", { id: id });
  };

  getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return await response.json();
  };
}

const devicesService = new DevicesService();
// devicesService.getDeviceById(466, 1604059107, "MICROSTAR02\\admin");
// devicesService.getDeviceDetailsBrowser(466);
devicesService.getDevicesCountLicense();
