import React from "react";
import styles from "./MyPost.module.css";

const MyPost = props => {
  const addPost = () => {
    return props.addPost([
      { post1: "Text Text Text Text Text Text ", likes: 10 }
    ]);
  };

  return (
    <div className={styles.blog_text}>
{/*       {props.message}
 */}
      <button onClick={addPost} className={styles.counter_likes}>
        {props.likesCount}
      </button>
    </div>
  );
};

export default MyPost;
