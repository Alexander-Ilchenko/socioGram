import React from "react";
import st from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  let dialogElements = props.store.state.messagesPage.dialogs.map((dialog) => {
    return (
      <Dialog
        id={dialog.id}
        userName={dialog.userName}
        text={dialog.text}
        date={dialog.date}
      />
    );
  });
  return (
    <main className={st.main}>
      <h1>My Dialogs</h1>
      <div className={st.wrupper}>
        <ul className={st.dialogs_list}>{dialogElements}</ul>
      </div>
    </main>
  );
};
export default Dialogs;
