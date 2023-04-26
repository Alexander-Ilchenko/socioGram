import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    props.store.dispatch(changeNewPostTextActionCreator(text));
  };
  return (
    <MyPosts
      changeNewPostText={onPostChange}
      posts={state.profilePage.posts}
      addPost={addNewPost}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
