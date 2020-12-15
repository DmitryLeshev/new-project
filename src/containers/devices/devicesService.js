import query from "@assets/utils/query";

export default class DevicesService {
  getAllDevices = async () => {
    const res = await query("device/list");
    // console.log("getAllDevices", res);
    return res.msg;
  };

  getDeviceDetailsPrograms = async (id) => {
    // Перенести трансоформацию в редукс
    const res = await query("deviceInfo/getPrograms", { id });
    console.log(res);
    return res;
    // return res.map(this._transformProgram);
  };

  getDeviceDetailsScreenshots = async (
    id,
    page = 1,
    user = null,
    tstStart = 0,
    tstEnd = 0
  ) => {
    const body = { id, page, user, tstStart, tstEnd };
    console.log("getDeviceDetailsScreenshots body: ", body);
    const res = await query("deviceInfo/getScreen", body);
    console.log("getDeviceDetailsScreenshots res: ", res);
    return res;
    // return await query("device/getLanScreen", body);
  };

  getDeviceDetailsPorts = async (id) => {
    return await query("deviceInfo/getPorts", { id });
  };

  getDeviceDetailsBrowser = async (id) => {
    return await query("device/getLanBrowserTabs", { device_id: id });
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

// const devicesService = new DevicesService();
// devicesService.getAllDevices();
