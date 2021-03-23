import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

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
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#link">Buy</NavLink>
          <NavLink to="/addProperty">Sell</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="#link">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
