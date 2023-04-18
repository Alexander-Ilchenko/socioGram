import React from "react";
import st from "./Event.module.css";
const Event = (props) => {
  return (
    <div className={st.container}>
      <div className={st.dialog_list_item}>
        <div className={st.user}>
          <h3>{props.userName}</h3>
          <img src="avatar.png" alt="avatar" />
        </div>
        <div className={st.event}>
          <img src="event.jpg" alt="novost" />
          <span className={st.span}>{props.text} </span>
        </div>
        <h6 className={st.date}>{props.date}</h6>
      </div>
    </div>
  );
};
export default Event;
