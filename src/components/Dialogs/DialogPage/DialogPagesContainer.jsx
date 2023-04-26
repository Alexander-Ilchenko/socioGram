import React from "react";

import {
  sendMessageActionCreator,
  changeNewMesaageTextActionCreator,
} from "../../../redux/redux-store";
import DialogPage from "./DialogPage";

const DialogPageContainer = (props) => {
  let state = props.store.getState();

  let sendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator);
  };
  let changeNewMesaageText = (event) => {
    let text = event.target.value;
    props.store.dispatch(changeNewMesaageTextActionCreator(text));
  };
  return (
    <DialogPage
      sendNewMessage={sendNewMessage}
      changeNewMesaageText={changeNewMesaageText}
      state={state}
    />
  );
};
export default DialogPageContainer;
