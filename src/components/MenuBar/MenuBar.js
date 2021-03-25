import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import { useHistory } from "react-router-dom";
import { authentication } from "../../App";

const MenuBar = () => {
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    authentication.onLogout();
    history.push("/");
  };
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#F88C8C" }}>
      <NavLink to="/" className="navBrand">
        WCRealEstate
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="/propertyList">
            Buy
          </NavLink>
          <NavLink className="navLink" to="/addProperty">
            Sell
          </NavLink>
          <NavLink className="navLink" to="/profile">
            Profile
          </NavLink>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
          <NavLink className="navLink" onClick={logoutHandler} to="">
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
