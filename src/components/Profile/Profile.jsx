import React, {useState} from "react";
import styles from "./Profile.module.css";
import Avatar from "../../image/avatar.svg";
import PersonInfo from "./personInfo/personInfo";
import MyPost from "./MyPost/MyPost";

const Profile = (props) => {

//  const [post, changePost] = useState()
//  const handleChange = (e) => {     /* при изменении состояния textarea оно передасться в e 
//    и в e будет введенный текст */
//    changePost(e.target.value);
//  }

   const onPostChange = (e) => {/* при изменении состояния textarea оно передасться в e 
    и в e будет введенный текст */
    console.log("text -"+e.target.value);
      props.newTextPost(e.target.value);
   }

 let MyPostText = props.data.MyPostData.map((el)=>{
  return (
    <MyPost message={el.post} likesCount={el.likes} addPost={props.addPost}/>
    );
}); 


const addPost = () => { /* берёт  addPost из state и добавляет 
  новое сообщение в state*/
    props.addPost(
    {post: props.data.TextPost, likes: 11 }
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
          
        <textarea onChange={onPostChange} value={props.data.TextPost} className={styles.input}></textarea>
          <div className={styles.wrapper_button_release}>
          <button onClick={addPost} className={styles.button_release}>Release</button>
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