import query from "@assets/utils/query";

class DevicesService {
  getAllDevices = async () => {
    return await query("device/list");
  };

  getDeviceDetailsPrograms = async (id) => {
    // Перенести трансоформацию в редукс
    const res = await query("device/getLanPrograms", { id: id });
    console.log(res);
    return res.map(this._transformProgram);
  };

  getDeviceDetailsScreenshots = async (id, page = 1, user = null) => {
    const body = { device_id: id, page, user };
    return await query("device/getLanScreen", body);
  };

  getDeviceDetailsPorts = async (id) => {
    return await query("device/getLanPorts", { device_id: id });
  };

  getDeviceDetailsBrowser = async (id) => {
    return await query("device/getLanBrowserTabs", { device_id: id });
  };

  getDeviceDetailsProcesses = async (id) => {
    return await query("device/getLanProcesses", {
      device_id: id,
    });
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

  _transformProgram = (program) => {
    return {
      icon: program.icon,
      instTst: new Date(program.inst_tst * 1000).toLocaleDateString(),
      location: program.location,
      name: program.name,
      publisher: program.publisher,
      version: program.version,
    };
  };
}

export default DevicesService;

// const devicesService = new DevicesService();
// devicesService.getAllDevices();
