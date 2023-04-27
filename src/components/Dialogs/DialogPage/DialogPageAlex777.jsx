import React from "react";
import st from "./DialogPage.module.css";
import Message from "./Message/Message";
const DialogPageAlex777 = (props) => {
  let messagesElement = props.state.messagesPage.messages.Alex777.map(
    (message) => {
      return (
        <Message
          class={message.class}
          userName={message.userName}
          text={message.text}
        />
      );
    }
  );

  let onSendMessage = () => {
    props.sendNewMessage();
  };
  let onMessageChange = (event) => {
    let text = event.target.value;
    props.changeNewMesaageText(text);
  };
  return (
    <main className={st.main}>
      <h1>Alex777</h1>
      <div className={st.wrupper}>
        <ul className={st.dialogs_list}>{messagesElement}</ul>
        <div className={st.send_message}>
          <div className={st.input}>
            <input
              type="text"
              onChange={onMessageChange}
              placeholder="type new message....."
              value={props.state.messagesPage.messages.newMessageText}
            />
          </div>
          <div className={st.btn}>
            <button onClick={onSendMessage} className={st.btn}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default DialogPageAlex777;
