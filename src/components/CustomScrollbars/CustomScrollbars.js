import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default CustomScrollbars;
