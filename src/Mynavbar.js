import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Blog from "./components/Blog";
import HomePage from "./components/HomePage";
import styles from "./css/main.css";
import brandLogo from "./image/adrasti_JPEG_LOGO.png";

const Mynavbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#fff", height: "10vh" }}
      >
        <Container>
          <Navbar.Brand href="/home" style={{ marginLeft: "3rem" }}>
            <img src={brandLogo} alt="" style={{ width: "12rem" }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
            style={{marginRight:"3rem"}}
          >
            <Nav>
              <Nav.Link
                href="/home"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/contact"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/faq"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Faq
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomePage />
      <Blog />
    </div>
  );
};

export default Mynavbar;
