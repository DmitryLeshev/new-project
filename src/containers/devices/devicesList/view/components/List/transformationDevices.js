import ComputerIcon from "@material-ui/icons/Computer";
import WifiIcon from "@material-ui/icons/Wifi";
import RouterIcon from "@material-ui/icons/Router";

const transformationDevices = (devices, selectedDevice) => {
  return devices.map((device) => {
    const renderIcon = () => {
      if (device.type === 0) {
        return ComputerIcon;
      } else if (device.type === 1) {
        return RouterIcon;
      } else if (device.type === 2) {
        return WifiIcon;
      }
    };
    return {
      id: device.id,
      textPrimary: device.name,
      textSecondary: device.status,
      icon: renderIcon(),
      isProtected: device.is_protected,
      active: device.id === Number(selectedDevice),
    };
  });
};

export default transformationDevices;
