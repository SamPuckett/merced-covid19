import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const MainNavBar = props => {
  return (
    <div className='main-navbar'>
      <Navbar
        expand='md'
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--custom-green)",
          color: "var(--custom-tan)"
        }}
      >
        <NavbarBrand>Merced County COVID-19</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default MainNavBar;
