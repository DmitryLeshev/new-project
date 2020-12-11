import React, { Component } from "react";

export default class DevicesList extends Component {
  componentDidMount() {
    const { devicesListLoading, deviceDetailsLoading, match } = this.props;
    const { id, tab } = match.params;
    devicesListLoading();

    if (id && tab) {
      deviceDetailsLoading(id, tab);
    }
  }

  componentDidUpdate(prevProps) {
    const { deviceDetailsLoading, match } = this.props;
    const { id, tab } = match.params;
    const { id: prevId, tab: prevTab } = prevProps.match.params;

    if (prevId !== id || prevTab !== tab) {
      deviceDetailsLoading(id, tab);
    }
  }

  render() {
    return <div></div>;
  }
}
