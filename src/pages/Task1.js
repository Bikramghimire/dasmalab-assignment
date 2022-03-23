import React from "react";

const Task1 = () => {
  return (
    <div>
      <p>this is the task one</p>
      <input type="range" min="1" max="100" value="50"></input>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
      </div>
    </div>
  );
};

export default Task1;
