import React from "react";
import styles from "./MyPost.module.css";

const MyPost = props => {
  
  return (
    <div className={styles.blog_text}>
        {props.message}
      <button className={styles.counter_likes}>
        {props.likesCount}
      </button>
    </div>
  );
};

export default MyPost;
