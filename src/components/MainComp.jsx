import React from "react";
import DynamicDraggable from "./Draggable";
import "./style.css";
import Parent from "./AddParent";

const MainComp = () => {
  return (
    <div className="container">
      <div
        style={{ width: "300px", height: "300px", border: "1px solid #ccc" }}
      >
        <DynamicDraggable style={{ width: "100%", height: "100%" }}>
          <div>
            <div style={{ borderBottom: "1px solid black" }}>Title</div>
            <div>Content</div>
          </div>
        </DynamicDraggable>
      </div>
      <Parent />
    </div>
  );
};

export default MainComp;
