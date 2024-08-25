import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="Headeralignment">
            <Link to="/">Home</Link>

            <Link to="/Page1">Page1</Link>

            <Link to="/Page2">Page2</Link>

            <Link to="/Page3">Page3</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
