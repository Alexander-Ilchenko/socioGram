import React from "react";
import st from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  let dialogData = [
    {
      id: "Alex333",
      userName: "Alexey Novikov",
      text: "Helllo!!! world.loremdkfbkasdgkjjhas dbgdbskjfbbdfkgsdgdf",
      date: "16.04.2023__11:53",
    },
    {
      id: "Igor777",
      userName: "Igor Dobrovolskiy",
      text: "Helllo!!! Im whith you guys",
      date: "17.04.2023__20:40",
    },
    {
      id: "Maxim453",
      userName: "Maxim Pavlichenko",
      text: "it was a great sundey!!!",
      date: "18.04.2023__13:40",
    },
  ];

  let dialogElements = dialogData.map((dialog) => {
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
