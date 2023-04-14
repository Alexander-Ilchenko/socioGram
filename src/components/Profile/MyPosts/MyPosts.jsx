import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = () => {
  return (
    <div className={st.container}>
      <h3 className={st.title}>My Posts</h3>
      <div className={st.new_post}>
        <div className={st.input}>
          <input type="text" placeholder="new post about....." />
        </div>
        <div className={st.btn}>
          <button className={st.btn}>Add</button>
        </div>
      </div>
      <ul className={st.post_list}>
        <Post text="Helllo!!! world." />
        <Post text="Helllo!!! Im whith you guys" />
        <Post text="it was a great sundey!!!" />
      </ul>
    </div>
  );
};
export default MyPosts;
