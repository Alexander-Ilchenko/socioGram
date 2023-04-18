import React from "react";
import st from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
  return (
    <main className={st.main}>
      <h1>My Dialogs</h1>
      <div className={st.wrupper}>
        <ul className={st.dialogs_list}>
          <Dialog
            userName="Alexey Novikov"
            text="Helllo!!! world.loremdkfbkasdgkjjhas
            dbgdbskjfbbdfkgsdgdf 
            "
            date="16.04.2023__11:53"
          />
          <Dialog
            userName="Igor Dobrovolskiy"
            text="Helllo!!! Im whith you guys"
            date="17.04.2023__20:40"
          />
          <Dialog
            userName="Maxim Pavlichenko"
            text="it was a great sundey!!!"
            date="18.04.2023__13:40"
          />
        </ul>
      </div>
    </main>
  );
};
export default Dialogs;
