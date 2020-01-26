import { addInputMessageCharCreator, PutFullMessagePageCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'

const DialogsConteiner = connect( 
                                (state)=>{ return {data: state.dialogsPage} }, //кидаем данные сначала
                                (dispatch)=> {       
                                    return {
                                              addInputMessageChar: dispatch(addInputMessageCharCreator),  
                                              PutFullMessagePage: dispatch (PutFullMessagePageCreator)}
                                            }
                                )(Dialogs);

  export default DialogsConteiner;
 