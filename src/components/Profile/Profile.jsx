import React from "react";
import styles from "./Profile.module.css";
import Avatar from "../../image/avatar.svg";
import PersonInfo from "./personInfo/personInfo";
import MyPost from "./MyPost/MyPost";

const Profile = () => {

let MyPostData= [
{post1:"Text Text Text Text Text Text ", likes:10}
];

 let MyPostItem = MyPostData.map((el)=>{
  return (
    <MyPost message={el.post1} likesCount={el.likes} />
    );
}); 

  return (
    <div className={styles.profile}>
       <div className={styles.block_person}>
    <div className={styles.wrapper_foto}>  <img src={Avatar} alt="" className={styles.profilefoto} /></div>
      <PersonInfo />
      </div>
      <div className={styles.blog}>
        <h2 className={styles.h2_title}>My Blog</h2>
        <div className={styles.wrapper_input}>
          <input className={styles.input} type="text"></input>
          <div className={styles.wrapper_button_release}>
            <button className={styles.button_release}>Release</button>
          </div>
        </div>
      </div>
      {MyPostItem}   
    </div>
  );
};

export default Profile;
