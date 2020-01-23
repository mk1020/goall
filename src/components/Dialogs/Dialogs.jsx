import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogShow = props => {
  let path = "/dialogs/" + props.id; /* Компонента которая отрисовывает имена людей в диалогах
  точнее, она отрисовывет ссылки на диалоги, на странице Dialogs */
  return (
    <NavLink to={path} activeClassName={styles.active_link_1}>
      {props.name}
    </NavLink>
  );
};
 
const Message = props => {
  return <div>{props.message}</div>; /* отрисовка сообщений */
};

const Dialogs = props => {
  let dialogShow = props.data.dialogsData.map(el => {
    /* перебор всех диалогов */
    return <DialogShow id={el.id} name={el.name} />;
  });

  let MessageShow = props.data.messagesData.map(el => {
    return <Message message={el.message} /> /* отрисовка всех сообщений */;
  });


  const TextAriaNewChar = (e) => {
    props.TextAriaNewChar(e.target.value);
}

let addInputMessageChar = () => {
  props.addInputMessageChar(props.data.textAriaNew);
}


  return (
    <div className={styles.wrapper_dialogs_wrapper}>
      <div className={styles.dialogs_wrapper}>
        <nav className={styles.nav}>{dialogShow}</nav>
        <div>
             {MessageShow}            
            <div> {props.data.TextMessage}</div>
        </div>
      </div>
      <div className={styles.wraper_input_and_button}>
      <textarea onChange={TextAriaNewChar} value={props.data.textAriaNew} className={styles.input}></textarea>
        <button onClick={addInputMessageChar} className={styles.button_release}>Release</button>
      </div>
    </div>
  );
};

export default Dialogs;
