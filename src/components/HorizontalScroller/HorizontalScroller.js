import React, { useRef } from "react";
import "./HorizontalScroller.css";

const HorizontalScroller = ({ children }) => {
  const scrollerWrapperRef = useRef(null);
  let scrollLeft = 0;

  const handleWheelScroll = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    const delta = e.deltaY || e.deltaX;

    // Adjust the scroll speed by changing the number (e.g., 40)
    scrollLeft += delta * 1;

    // Limit the scrollLeft value to prevent over-scrolling
    scrollLeft = Math.min(
      scrollerWrapperRef.current.scrollWidth -
        scrollerWrapperRef.current.clientWidth,
      Math.max(0, scrollLeft)
    );

    scrollerWrapperRef.current.scrollLeft = scrollLeft;
  };

  return (
    <div
      className="scroller-wrapper"
      onWheel={handleWheelScroll}
      ref={scrollerWrapperRef}
    >
      <div className="content" id="horizontal-content">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;
