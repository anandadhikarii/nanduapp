import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Home from './Home';
import logo from './images/marteru logo.png'; // Make sure to import your logo image

function App() {
  return (
    <Router>
      <div>
        {/* Header with black background */}
        <header style={{ backgroundColor: '#00214D', padding: '10px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          
          {/* Navigation section */}
          <nav>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              gap: '20px',
            }}>
              <li>
                <Link to="/" style={buttonStyle}>Home</Link>
              </li>
              <li>
                <Link to="/Page1" style={buttonStyle}>Attractions</Link>
              </li>
              <li>
                <Link to="/Page2" style={buttonStyle}>Videos</Link>
              </li>
              <li>
                <Link to="/Page3" style={buttonStyle}>About Us</Link>
              </li>
            </ul>
          </nav>

          {/* Logo and Text section - positioned at the top right */}
          <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <span style={{ color: 'white', fontSize: '18px' }}>mana.marteru</span>
          </div>
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

// Button styling for navigation links
const buttonStyle = {
  textDecoration: 'none',
  padding: '10px 10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  borderRadius: '5px',
  border: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

// Logo styling
const logoStyle = {
  width: '60px', // Adjust size of the logo
  height: '60px', // Adjust size of the logo
};

export default App;
