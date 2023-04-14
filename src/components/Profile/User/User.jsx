import React from "react";
import st from "./User.module.css";
const User = () => {
  return (
    <div className={st.container}>
      <div className={st.user}>
        <div className={st.user_avatar}>
          <img src="avatar.png" alt="avatar" />
        </div>
        <div className={st.user_about}>
          <div className={st.user_title}>
            <div className={st.user_name}>
              <h2>Ivan Ivanov</h2>
            </div>
            <div className={st.user_from}>
              <h2>Batumi</h2>
            </div>
          </div>
          <ul className={st.user_info}>
            <li className={st.user_first_name}>Ivan</li>
            <li className={st.user_last_name}>Ivanov</li>
            <li className={st.user_age}>25</li>
            <li className={st.user_sex}>male</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default User;
