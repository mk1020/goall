import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import Profile from "./Profile";

const ProfileConteiner = (props) => {

const addPost = () => { /* берёт  addPost из state и добавляет 
  новое сообщение в state*/
   props.store.dispatch ( addPostActionCreator(props.store.getState().profilePage.TextPost) )
};

const onPostChange = (e) => {/* при изменении состояния textarea оно передасться в e 
  и в e будет введенный текст */
      props.store.dispatch( updateNewPostTextActionCreator(e.target.value) )
 }

  return ( 
    <Profile addPost= {addPost} onPostChange={onPostChange} profilePage={props.store.getState().profilePage}/>
  );
};

export default ProfileConteiner;