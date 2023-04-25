let SEND_MESSAGE = "SEND_MESSAGE";
let CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";
let initialState = {
  dialogs: [
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
  ],
  messages: {
    Alex777: [
      {
        userName: "Alex777",
        class: "container",
        text: "hello!!. How are you",
      },
      { userName: "Alex777", class: "container_me", text: "hello!! " },
      {
        userName: "Alex777",
        class: "container_me",
        text: "I am fine. Thank you. what is new?",
      },
      {
        userName: "Alex777",
        class: "container",
        text: "i am almost find a job",
      },
      { userName: "Alex777", class: "container", text: "cool" },
    ],
    newMessageText: "",
  },
};
const messagesReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = {
      userName: "Alex777",
      class: "container_me",
      text: state.messages.newMessageText,
    };
    state.messages.Alex777.push(newMessage);
    state.messages.newMessageText = "";
  } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
    state.messages.newMessageText = action.newMessage;
  }
  return state;
};
export default messagesReducer;
