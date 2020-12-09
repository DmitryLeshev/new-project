import React, { Component } from "react";
import LazyLoader from "./components/LazyLoader";
import ScrollContainer from "./components/ScrollContainer";

import throttle from "@assets/utils/throttle";

class LazyLoad extends Component {
  state = {
    scrollContainerRect: {},
    scrollTop: 0,
  };

  appendItems = () => {
    this.props.test();
  };

  onScroll = throttle((scrollTop, scrollContainerRect) => {
    this.setState({ scrollTop, scrollContainerRect });
  }, 500);

  render() {
    const { scrollContainerRect, scrollTop } = this.state;

    return (
      <ScrollContainer onScroll={this.onScroll}>
        <LazyLoader
          scrollTop={scrollTop}
          scrollContainerRect={scrollContainerRect}
          onIntersection={this.appendItems}
        >
          {this.props.children}
        </LazyLoader>
      </ScrollContainer>
    );
  }
}

export default LazyLoad;
