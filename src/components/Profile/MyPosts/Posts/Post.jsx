import React from "react";
import st from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={st.container}>
      <li className={st.post_list_item}>
        <div className={st.item_wrupper}>
          <img src="avatar.png" alt="avatar" />
          <span>{props.text}</span>
        </div>
      </li>
    </div>
  );
};
export default Post;
