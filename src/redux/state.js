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
  subscribe(observer) {
    this._rerenderApp = observer;
  },
};

export default store;
window.store = store;
