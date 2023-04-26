import React from "react";
import st from "./Profile.module.css";
import User from "./User/User";
import MyPhotos from "./MyPhotos/MyPhotos";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <main className={st.main}>
      <User />
      <MyPhotos />
      <MyPostsContainer store={props.store} />
    </main>
  );
};
export default Profile;
