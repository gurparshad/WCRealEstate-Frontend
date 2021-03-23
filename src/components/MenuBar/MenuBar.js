import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

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
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="#link">
            Buy
          </NavLink>
          <NavLink className="navLink" to="/addProperty">
            Sell
          </NavLink>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
          <NavLink className="navLink" to="#link">
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
