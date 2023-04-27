import React from "react";

import {
  sendMessageActionCreator,
  changeNewMesaageTextActionCreator,
} from "../../../redux/redux-store";
import DialogPageAlex777 from "./DialogPageAlex777";

const DialogPageContainer = (props) => {
  let state = props.store.getState();

  let sendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let changeNewMesaageText = (text) => {
    props.store.dispatch(changeNewMesaageTextActionCreator(text));
  };
  return (
    <DialogPageAlex777
      sendNewMessage={sendNewMessage}
      changeNewMesaageText={changeNewMesaageText}
      state={state}
    />
  );
};
export default DialogPageContainer;
