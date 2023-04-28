import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./message-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
});
let store = createStore(reducers);

let ADD_POST = "ADD_POST";
let CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
let SEND_MESSAGE = "SEND_MESSAGE";
let CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const changeNewPostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    newText: text,
  };
};
export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const changeNewMesaageTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};
export default store;
