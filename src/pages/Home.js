import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="task1">
          <h4>task1</h4>
        </Link>
        <Link to="task2">
          {" "}
          <h4>task2</h4>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
