import { addInputMessageCharCreator, PutFullMessagePageCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'


const DialogsConteiner= connect( 
                                (state)=>{ return {data: state.dialogsPage} }, //кидаем данные сначала
                                ()=> {return {addInputMessageChar: addInputMessageCharCreator,  // потом экшэны. Анонимная функция 
                                             TextAriaNewChar: PutFullMessagePageCreator}}
                                )(Dialogs); //использ. потому что такие правила


  export default DialogsConteiner;
 