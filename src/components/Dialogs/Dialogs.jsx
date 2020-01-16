import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';


let dialogsData = [
  
];


const DialogItem = (props)=>{
  let path= "/dialogs/1" + props.id;
  return (
    <NavLink to={path} activeClassName={styles.active_link_1}>{props.name}</NavLink>
  );
}

const Message = (props)=>{
  return(
  <div>{props.message}</div>
  );
}
const Dialogs = () => {
  return (
    <div className={styles.dialogs_wrapper}>
            <nav className={styles.nav}>
              <DialogItem id="1" name="Masha"/>
              <DialogItem id="1" name="Mike"/>
              <DialogItem id="1" name="Sveta"/>
              <DialogItem id="1" name="Will"/>
            </nav>
        <Message message="Here Message" />
        
    </div>
  );
};

export default Dialogs;
