import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} activeClassName={styles.active_link_1}>
      {props.name}
    </NavLink>
  );
};

const Message = props => {
  return <div>{props.message}</div>;
};

const Dialogs = () => {

  let dialogsData = [
    { id: 1, name: "Masha" },
    { id: 2, name: "Mike" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Will" }
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How are you" },
    { id: 4, message: "How are you feeling?" }
  ];

  let dialogItems = dialogsData.map((el)=>{
    return (
    <DialogItem id={el.id} name={el.name} />
      );
  });

  let MessageItems = messagesData.map((el)=>{
    return (
      <Message message={el.message} />
      );
  });

  return (
    <div className={styles.dialogs_wrapper}>
      <nav className={styles.nav}>
        {dialogItems}
      </nav>
      <div>
        {MessageItems}
      </div>
    </div>
  );
};

export default Dialogs;
