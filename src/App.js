import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Home from  './Home';


function App() {
  return (
    <Router >
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Page1">Page1</Link>
            </li>
            <li>
              <Link to="/Page2">Page2</Link>
            </li>
            <li>
            <Link to="/Page3">Page3</Link>
            </li>
          </ul>
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
