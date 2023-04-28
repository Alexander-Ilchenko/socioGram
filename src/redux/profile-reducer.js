let ADD_POST = "ADD_POST";
let CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

let intialState = {
  posts: [
    { text: "Helllo!!! world." },
    { text: "Helllo!!! Im whith you guys" },
    { text: "Helllo!!! Im whith you guys" },
    { text: "it was a great sundey!!!" },
    { text: "it was a great sundey!!!" },
  ],
  newPostText: "",
};
const profileReducer = (state = intialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      text: state.newPostText,
    };
    return { ...state, posts: [...state.posts, newPost], newPostText: "" };
  } else if (action.type === CHANGE_NEW_POST_TEXT) {
    return { ...state, newPostText: action.newText };
  }
  return state;
};
export default profileReducer;
