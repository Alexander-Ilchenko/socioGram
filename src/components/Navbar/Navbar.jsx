import React from "react";
import st from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={st.nav}>
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Dialogs</a>
        </li>
        <li>{/* <a href="/news">News</a> */}</li>
        <li>{/* <a href="/music">Music</a> */}</li>
        <li>{/* <a href="/settings">Settings</a> */}</li>
      </ul>
    </nav>
  );
};
export default Navbar;
