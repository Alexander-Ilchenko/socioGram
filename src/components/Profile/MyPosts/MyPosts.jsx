import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = () => {
  let postData = [
    { text: "Helllo!!! world." },
    { text: "Helllo!!! Im whith you guys" },
    { text: "Helllo!!! Im whith you guys" },
    { text: "it was a great sundey!!!" },
    { text: "it was a great sundey!!!" },
  ];

  let postElements = postData.map((post) => {
    return <Post text={post.text} />;
  });
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
      <ul className={st.post_list}>{postElements}</ul>
    </div>
  );
};
export default MyPosts;
