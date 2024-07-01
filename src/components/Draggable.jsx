import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";

const DynamicDraggable = ({ children, style }) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const childRect = childRef.current.getBoundingClientRect();
      const left = 0;
      const right = parentRect.width - childRect.width;
      const top = 0;
      const bottom = parentRect.height - childRect.height;

      setBounds({ left, right, top, bottom });
    }
  }, []);

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const handleDragStop = (e, ui) => {
    console.log("Drag stopped at:", ui.x, ui.y);
  };

  return (
    <div ref={parentRef} style={{ position: "relative", ...style }}>
      <Draggable
        axis="both"
        bounds={bounds}
        position={position}
        onDrag={handleDrag}
        onStop={handleDragStop}
      >
        <div
          ref={childRef}
          style={{
            width: "80px",
            height: "50px",
            backgroundColor: "lightblue",
            cursor: "move",
            border: "1px solid black",
          }}
        >
          {children}
        </div>
      </Draggable>
    </div>
  );
};

export default DynamicDraggable;
