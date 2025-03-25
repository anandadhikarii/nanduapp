import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        {/* Header with black background */}
        <header style={{ backgroundColor: 'black', padding: '10px 0' }}>
          <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}>
              <li>
                <Link
                  to="/"
                  style={buttonStyle}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Page1"
                  style={buttonStyle}
                >
                  Page1
                </Link>
              </li>
              <li>
                <Link
                  to="/Page2"
                  style={buttonStyle}
                >
                  Page2
                </Link>
              </li>
              <li>
                <Link
                  to="/Page3"
                  style={buttonStyle}
                >
                  Page3
                </Link>
              </li>
            </ul>
          </nav>
        </header>

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

// Button styling
const buttonStyle = {
  textDecoration: 'none',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default App;
