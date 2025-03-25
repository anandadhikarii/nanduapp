import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Home from './Home';
import logo from './images/marteru logo.png'; // Import your logo image
import styled from 'styled-components'; // Import styled-components

const App = () => (
  <Router>
    <Container>
      <Header>
        <Nav>
          <NavList>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/Page1">Attractions</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/Page2">Videos</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/Page3">About Us</StyledLink>
            </NavItem>
          </NavList>
        </Nav>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <Text>mana.marteru</Text>
        </LogoContainer>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </Container>
  </Router>
);

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header`
  background-color: #00214D;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
  display: inline-block;
  min-width: 100px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Text = styled.span`
  color: white;
  font-size: 18px;
`;

// Responsive Styles using Media Queries
const mediaQueries = `
  @media screen and (max-width: 768px) {
    ${Header} {
      flex-direction: column;
      padding: 20px 0;
    }
    ${Nav} {
      flex-direction: column;
      align-items: center;
    }
    ${NavList} {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    ${Logo} {
      width: 50px;
      height: 50px;
    }
    ${StyledLink} {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media screen and (max-width: 480px) {
    ${StyledLink} {
      font-size: 12px;
      padding: 8px 12px;
    }
    ${Logo} {
      width: 40px;
      height: 40px;
    }
  }
`;

export default App;
