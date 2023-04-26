// import messagesReducer from "./message-reducer";
// import profileReducer from "./profile-reducer";

// let ADD_POST = "ADD_POST";
// let CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
// let SEND_MESSAGE = "SEND_MESSAGE";
// let CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

// let store = {
//   getState() {
//     return this._state;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagesPage.messages = messagesReducer(
//       this._state.messagesPage.messages,
//       action
//     );
//     this._rerenderApp(this._state);

//     if (action.type === ADD_POST) {
//       let newPost = {
//         text: this._state.profilePage.newPostText,
//       };
//       this._state.profilePage.posts.push(newPost);
//       this._state.profilePage.newPostText = "";

//       this._rerenderApp(this._state);
//     } else if (action.type === CHANGE_NEW_POST_TEXT) {
//       this._state.profilePage.newPostText = action.newText;
//       this._rerenderApp(this._state);
//     } else if (action.type === SEND_MESSAGE) {
//       let newMessage = {
//         userName: "Alex777",
//         class: "container_me",
//         text: this._state.messagesPage.messages.newMessageText,
//       };
//       this._state.messagesPage.messages.Alex777.push(newMessage);
//       this._state.messagesPage.messages.newMessageText = "";
//       this._rerenderApp(this._state);
//     } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
//       this._state.messagesPage.messages.newMessageText = action.newMessage;

//       this._rerenderApp(this._state);
//     }
//   },
//   _state: {
//     profilePage: {
//       posts: [
//         { text: "Helllo!!! world." },
//         { text: "Helllo!!! Im whith you guys" },
//         { text: "Helllo!!! Im whith you guys" },
//         { text: "it was a great sundey!!!" },
//         { text: "it was a great sundey!!!" },
//       ],
//       newPostText: "",
//     },

//     messagesPage: {
//       dialogs: [
//         {
//           id: "Alex333",
//           userName: "Alexey Novikov",
//           text: "Helllo!!! world.loremdkfbkasdgkjjhas dbgdbskjfbbdfkgsdgdf",
//           date: "16.04.2023__11:53",
//         },
//         {
//           id: "Igor777",
//           userName: "Igor Dobrovolskiy",
//           text: "Helllo!!! Im whith you guys",
//           date: "17.04.2023__20:40",
//         },
//         {
//           id: "Maxim453",
//           userName: "Maxim Pavlichenko",
//           text: "it was a great sundey!!!",
//           date: "18.04.2023__13:40",
//         },
//       ],
//       messages: {
//         Alex777: [
//           {
//             userName: "Alex777",
//             class: "container",
//             text: "hello!!. How are you",
//           },
//           { userName: "Alex777", class: "container_me", text: "hello!! " },
//           {
//             userName: "Alex777",
//             class: "container_me",
//             text: "I am fine. Thank you. what is new?",
//           },
//           {
//             userName: "Alex777",
//             class: "container",
//             text: "i am almost find a job",
//           },
//           { userName: "Alex777", class: "container", text: "cool" },
//         ],
//         newMessageText: "",
//       },
//     },

//     _rerenderApp() {},
//     addPost() {
//       let newPost = {
//         text: this._state.profilePage.newPostText,
//       };
//       this._state.profilePage.posts.push(newPost);
//       this._state.profilePage.newPostText = "";
//       this._rerenderApp(this._state);
//     },
//     changeNewPostText(newText) {
//       this._state.profilePage.newPostText = newText;
//       this._rerenderApp(this._state);
//     },
//     sendMessage() {
//       let newMessage = {
//         userName: "Alex777",
//         class: "container_me",
//         text: this._state.messagesPage.messages.newMessageText,
//       };
//       this._state.messagesPage.messages.Alex777.push(newMessage);
//       this._state.messagesPage.messages.newMessageText = "";
//       this._rerenderApp(this._state);
//     },
//     changeNewMessageText(newMessage) {
//       this._state.messagesPage.messages.newMessageText = newMessage;
//       this._rerenderApp(this._state);
//     },
//     subscribe(observer) {
//       this._rerenderApp = observer;
//     },
//   },
// };
// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };
// export const changeNewPostTextActionCreator = (text) => {
//   return {
//     type: CHANGE_NEW_POST_TEXT,
//     newText: text,
//   };
// };
// export const sendMessageActionCreator = () => {
//   return {
//     type: SEND_MESSAGE,
//   };
// };
// export const changeNewMesaageTextActionCreator = (text) => {
//   return {
//     type: CHANGE_NEW_MESSAGE_TEXT,
//     newMessage: text,
//   };
// };

// export default store;
