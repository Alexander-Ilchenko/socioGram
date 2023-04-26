import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => {
    return <Post text={post.text} />;
  });

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.changeNewPostText(text);
  };

  return (
    <div className={st.container}>
      <h3 className={st.title}>My Posts</h3>
      <div className={st.new_post}>
        <div className={st.input}>
          <input
            ref={newPostElement}
            type="text"
            onChange={onPostChange}
            placeholder="new post about....."
            value={props.newPostText}
          />
        </div>
        <div className={st.btn}>
          <button onClick={addNewPost} className={st.btn}>
            Add post
          </button>
        </div>
      </div>
      <ul className={st.post_list}>{postElements}</ul>
    </div>
  );
};
export default MyPosts;
