import React from "react";
import Drag from "./Drag";

const MainDrag = ({ dt, children }) => {
  return (
    <div
      key={dt.id}
      style={{
        height: `${dt.height + 100}px`,
        width: `${dt.width + 100}px`,
      }}
    >
      <Drag
        height={`${dt.height}px`}
        width={`${dt.width}px`}
        title={dt.title}
        content={dt.content}
        bounds={dt.bounds}
      >
        {children}
      </Drag>
    </div>
  );
};

export default MainDrag;
