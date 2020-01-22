import React, {useState, useEffect} from "react";
import styles from "./Profile.module.css";
import Avatar from "../../image/avatar.svg";
import PersonInfo from "./personInfo/personInfo";
import MyPost from "./MyPost/MyPost";

const Profile = (props) => {
/* const [post, changePost] = useState(false)
  useEffect (() => {
      post == false ? changePost(true) : changePost(false)
  },[post]) */
//  const [post, changePost] = useState()
//  const handleChange = (e) => {     /* при изменении состояния textarea оно передасться в e 
//    и в e будет введенный текст */
//    changePost(e.target.value);
//  }

 let MyPostText = props.profilePage.MyPostData.map((el)=>{
  return (
    <MyPost message={el.post} likesCount={el.likes} addPost={props.addPost}/>
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
          
        <textarea onChange={props.onPostChange} value={props.profilePage.TextPost} className={styles.input}></textarea>
          <div className={styles.wrapper_button_release}>
          <button onClick={props.addPost} className={styles.button_release}>Release</button>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_block_post}>
        {MyPostText}  
      </div> 
    </div>
  );
};

export default Profile;