import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dasmalab React assignment</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
