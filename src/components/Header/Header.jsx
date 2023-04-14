import React from "react";
import st from "./Header.module.css";
const Header = () => {
  return (
    <header className={st.header}>
      <div className={st.logo_wrupper}>
        <div className={st.logo}>
          <img className={st.logo_img} src="logo.jpg" alt="logo" />
        </div>
        <h1>SOCIO_GRAM</h1>
      </div>
    </header>
  );
};
export default Header;
