let store = {
  getState() {
    return this._state;
  },
  _state: {
    profilePage: {
      posts: [
        { text: "Helllo!!! world." },
        { text: "Helllo!!! Im whith you guys" },
        { text: "Helllo!!! Im whith you guys" },
        { text: "it was a great sundey!!!" },
        { text: "it was a great sundey!!!" },
      ],
      newPostText: "",
    },

    messagesPage: {
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
    },
  },
  _rerenderApp() {},
  addPost() {
    const newPost = {
      text: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderApp(this._state);
  },
  changeNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderApp(this._state);
  },
  sendMessage() {
    const newMessage = {
      userName: "Alex777",
      class: "container_me",
      text: this._state.messagesPage.messages.newMessageText,
    };
    this._state.messagesPage.messages.Alex777.push(newMessage);
    this._state.messagesPage.messages.newMessageText = "";
    this._rerenderApp(this._state);
  },
  changeNewMessageText(newMessage) {
    this._state.messagesPage.messages.newMessageText = newMessage;
    this._rerenderApp(this._state);
  },
  subscribe(observer) {
    this._rerenderApp = observer;
  },
  dispatch(action) {},
};

export default store;
window.store = store;
