import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="headerContainer">
      <Container className="headerMenu">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="mainMenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
