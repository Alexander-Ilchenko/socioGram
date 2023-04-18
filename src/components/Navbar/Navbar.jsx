import React from "react";
import st from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={st.nav}>
      <ul>
        <li className={st.item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className={st.item}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
