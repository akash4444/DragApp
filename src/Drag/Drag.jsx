import React, { useRef } from "react";
import Draggable from "react-draggable";
import "./drag.css";

const Drag = (props) => {
  const dragRef = useRef(null);
  const {
    height = "80px",
    width = "80px",
    title = "Title",
    content = "Content 1",
    bounds = true,
  } = props;
  return (
    <>
      <Draggable
        onDrag={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        ref={dragRef}
        bounds={bounds ? "parent" : undefined}
      >
        <div
          className="child-container"
          style={{ height: height, width: width }}
        >
          <div className="child-title">{title}</div>
          <div>{content}</div>
          {props.children}
        </div>
      </Draggable>
    </>
  );
};

export default Drag;
