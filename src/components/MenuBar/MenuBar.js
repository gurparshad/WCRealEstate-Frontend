import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MenuBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#F88C8C" }}
      className="justify-content-between"
    >
      <Navbar.Brand href="#home">WCRealEstate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Buy</Nav.Link>
          <Nav.Link href="#link">Sell</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
          <Nav.Link href="#link">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
