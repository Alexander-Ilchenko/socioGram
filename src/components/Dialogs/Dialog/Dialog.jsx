import React from "react";
import st from "./Dialog.module.css";
const Dialog = (props) => {
  return (
    <div className={st.container}>
      <div className={st.dialog_list_item}>
        <div className={st.user}>
          <h3>{props.userName}</h3>
          <img src="avatar.png" alt="avatar" />
        </div>
        <span className={st.span}>{props.text}</span>
        <h6 className={st.date}>{props.date}</h6>
      </div>
    </div>
  );
};
export default Dialog;
