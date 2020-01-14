import React from "react";
import Style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div>
        <a>Profile</a>
      </div>

      <div>
        <a>dialogs</a>
      </div>

      <div>
        <a>goals</a>
      </div>
    </nav>
  );
};

export default Navbar;
