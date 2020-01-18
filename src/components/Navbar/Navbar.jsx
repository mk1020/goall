import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.link_1}>
        <NavLink to="/profile" activeClassName={styles.active_link_1}>
          Profile
        </NavLink>
      </div>

      <div className={styles.link_2}>
        <NavLink to="/dialogs" activeClassName={styles.active_link_2}>
          Dialogs
        </NavLink>
      </div>

      <div>
        <NavLink to="/goals" activeClassName={styles.active_link_3}>
          Goals
        </NavLink>
      </div>

      <div className={styles.link_setting}>
        <NavLink to="/goals" activeClassName={styles.active_link_3}>
          Setting
        </NavLink>
      </div>

      <div className={styles.navbar_friends}>
         <div className={styles.navbar_friend_h3}>  <h3>Friends</h3> </div>
           <div className={styles.nikita}>Nikita</div>
           <div className={styles.will}>Will</div>
           <div className={styles.tom}>Tom</div>
      </div>
    </nav>
  );
};

export default Navbar;
