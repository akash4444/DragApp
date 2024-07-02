import React, { useState } from "react";
import MainDrag from "./MainDrag";
import "./drag.css";

const Main = () => {
  const [data, setData] = useState([
    {
      id: 1,
      height: 80,
      width: 80,
      title: "Title 1",
      content: "Content 1",
      bounds: false,
    },
  ]);

  const addParent = () => {
    const lastElement = data[data.length - 1];
    lastElement.bounds = true;

    const newElement = {
      id: data.length + 1,
      height: lastElement.height + 100,
      width: lastElement.width + 100,
      title: `Title ${data.length + 1}`,
      content: `Content ${data.length + 1}`,
      bounds: false,
    };

    setData([...data, newElement]);
  };

  const renderDragComponents = (data, index) => {
    if (index < 0) return null;
    return (
      <MainDrag dt={data[index]} index={index}>
        {renderDragComponents(data, index - 1)}
      </MainDrag>
    );
  };

  return (
    <div>
      <button onClick={addParent}>Add parent</button>
      {renderDragComponents(data, data.length - 1)}
    </div>
  );
};

export default Main;
