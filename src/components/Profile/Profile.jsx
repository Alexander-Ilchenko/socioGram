import React from "react";
import st from "./Profile.module.css";
import User from "./User/User";
import MyPhotos from "./MyPhotos/MyPhotos";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <main className={st.main}>
      <div className={st.container}>
        <User />
        <MyPhotos />
        <MyPosts />
      </div>
    </main>
  );
};
export default Profile;
