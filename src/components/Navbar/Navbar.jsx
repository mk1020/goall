import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.link_1}>
        <NavLink to="/profile" activeClassName={styles.active_link_1}>Profile</NavLink>
        
      </div>

      <div className={styles.link_2}>
      <NavLink to="/dialogs" activeClassName={styles.active_link_2}>Dialogs</NavLink>
      </div>

      <div>
        <a>goals</a>
      </div>
    </nav>
  );
};

export default Navbar;
