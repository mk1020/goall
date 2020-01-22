import React from "react";
import { addInputMessageCharCreator, PutFullMessagePageCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";


const DialogsConteiner = (props) => {
 
const TextAriaNewChar = (e) => {
     props.store.dispatch(addInputMessageCharCreator(e.target.value));
};

const ButtonSendMessage = () => {
      props.store.dispatch(PutFullMessagePageCreator(props.store.getState().dialogsPage.textAriaNew));
}
  return (
    <Dialogs TextAriaNewChar={TextAriaNewChar} ButtonSendMessage={ButtonSendMessage} 
        data={props.store.getState().dialogsPage} />
  );
};

export default DialogsConteiner;
