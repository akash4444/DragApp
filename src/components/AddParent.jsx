import React, { useState } from "react";

const Parent = () => {
  const [parentsCount, setParentsCount] = useState(0);

  const addParent = () => {
    setParentsCount(parentsCount + 1);
  };

  const renderParents = (count) => {
    let content = (
      <div
        style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}
      >
        <div
          draggable
          style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
        >
          Title Child
        </div>
        <div>child1</div>
      </div>
    );

    for (let i = 0; i < count; i++) {
      content = (
        <div
          key={i}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <div
            draggable
            style={{ borderBottom: "1px solid black", marginBottom: "10px" }}
          >
            Title {i + 1}
          </div>
          <div style={{ marginBottom: "10px" }}>Content of parent {i + 1}</div>
          {content}
        </div>
      );
    }

    return content;
  };

  return (
    <div>
      <div id="parent">{renderParents(parentsCount)}</div>
      <button onClick={addParent}>Add Parent Div</button>
    </div>
  );
};

export default Parent;
