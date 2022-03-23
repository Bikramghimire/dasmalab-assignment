import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="task1">task1</Link>
        <Link to="task2">task2</Link>
      </nav>
    </div>
  );
};

export default Home;
