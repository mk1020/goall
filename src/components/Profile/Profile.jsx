import React, {useState} from "react";
import styles from "./Profile.module.css";
import Avatar from "../../image/avatar.svg";
import PersonInfo from "./personInfo/personInfo";
import MyPost from "./MyPost/MyPost";

const Profile = (props) => {

  const handleChange = (e) => {     /* при изменении состояния textarea оно передасться в e 
    и в e будет введенный текст */
     //textPost=e.target.value; 
  }

 const MyOnePost = props.data.MyPostData.map((el, i)=>{
  return (
    <MyPost message={el.post1} likesCount={el.likes} addPost={props.addPost}/>
    );
}); 

 let MyPostItem = props.data.MyPostData.map((el)=>{
  return (
    <MyPost message={el.post1} likesCount={el.likes} addPost={props.addPost}/>
    );
}); 


const addPost = () => { /* берёт  addPost из state и добавляет 
  новое сообщение в state*/
  return props.addPost(
    { post1: 'post', likes: 10 }
  );
};
  return (
    <div className={styles.profile}>
       <div className={styles.block_person}>
    <div className={styles.wrapper_foto}>  <img src={Avatar} alt="" className={styles.profilefoto} /></div>
      <PersonInfo />
      </div>
      <div className={styles.blog}>
        <h2 className={styles.h2_title}>My Blog</h2>
        <div className={styles.wrapper_input}>
          
        <textarea onChange={handleChange} className={styles.input}></textarea>
          <div className={styles.wrapper_button_release}>
          <button onClick={addPost} className={styles.button_release}>Release</button>
          </div>
        </div>
      </div>
      {MyPostItem}   
    </div>
  );
};

export default Profile;