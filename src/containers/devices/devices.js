import React, { Component } from "react";

import DevicesView from "./view/Devices";

class Devices extends Component {
  render() {
    const { devicesList, match } = this.props;
    const { id, tab } = match.params;
    const { list } = devicesList;

    const device = list && list.find((d) => d.id === Number(id));
    const selectedDevice = id;

    return <DevicesView />;
  }
}

export default Devices;
