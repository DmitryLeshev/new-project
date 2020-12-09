import React, { Component } from "react";

import { Scrollbars } from "react-custom-scrollbars";

export default class ScrollContainer extends Component {
  handleScroll = (event) => {
    const { target } = event;
    const scrollContainerRect = target.getBoundingClientRect();
    const scrollTop = target.scrollTop;
    this.props.onScroll(scrollTop, scrollContainerRect);
  };

  render() {
    return (
      <Scrollbars onScroll={this.handleScroll} ref={this.containerRef}>
        {this.props.children}
      </Scrollbars>
    );
  }
}
