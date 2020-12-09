import React, { useState, useEffect, useRef } from "react";

const LazyLoader = (props) => {
  const {
    scrollTop,
    rootBottomMargin = 0,
    scrollContainerRect,
    onIntersection,
    children,
  } = props;

  const fakeBottomRef = useRef(null);
  const fakeListRect = fakeBottomRef.current
    ? fakeBottomRef.current.getBoundingClientRect()
    : {};

  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    setScrollThreshold(
      fakeListRect.top - scrollContainerRect.top - scrollContainerRect.height
    );
  }, [scrollTop, scrollContainerRect, fakeListRect.top]);

  useEffect(() => {
    if (scrollThreshold < rootBottomMargin) {
      onIntersection();
    }
  }, [scrollThreshold, rootBottomMargin, onIntersection]);

  return (
    <div>
      {children}
      <div ref={fakeBottomRef} />
    </div>
  );
};

export default LazyLoader;
