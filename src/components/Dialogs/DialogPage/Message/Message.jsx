import React from "react";
import st from "./Message.module.css";
const Message = (props) => {
  return (
    <div className={st[props.class]}>
      <p className={st.text}>{props.text}</p>
    </div>
  );
};
export default Message;
