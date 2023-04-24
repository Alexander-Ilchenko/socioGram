import React from "react";
import st from "./Profile.module.css";
import User from "./User/User";
import MyPhotos from "./MyPhotos/MyPhotos";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {
  return (
    <main className={st.main}>
      <User />
      <MyPhotos />
      <MyPosts
        newPostText={props.state.newPostText}
        posts={props.state.posts}
        addPost={props.addPost}
        changeNewPostText={props.changeNewPostText}
      />
    </main>
  );
};
export default Profile;
