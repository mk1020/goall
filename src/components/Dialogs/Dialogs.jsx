import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/1" + props.id;
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

  return (
    <div className={styles.dialogs_wrapper}>
      <nav className={styles.nav}>
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
      </nav>
      <div>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
