import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
          <NavLink to='/'>
            <Navbar.Brand  style={{ marginLeft: "3rem" }}>
              <img src={brandLogo} alt="" style={{ width: "12rem" }}></img>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
            style={{ marginRight: "3rem" }}
          >
            <Nav>
            <NavLink to='/' style={{ textDecoration:"none"}}>
              <Nav.Link
                href="/home"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Home
              </Nav.Link>
              </NavLink>
              <NavLink to='/about' style={{ textDecoration:"none"}}>
              <Nav.Link
                href="/about"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                About
              </Nav.Link>
              </NavLink>
            </Nav>
            <Nav>
            <NavLink to='/contact' style={{ textDecoration:"none"}}>
              <Nav.Link
                href="/contact"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Contact
              </Nav.Link>
              </NavLink>
              <NavLink to='/faq' style={{ textDecoration:"none"}}>
              <Nav.Link
                href="/faq"
                style={{ color: "#000", fontSize: "1.6rem" }}
              >
                Faq
              </Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mynavbar;
