import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

     
    const ProfileConteiner = connect ( (state) =>{return {profilePage: state.profilePage}}, 
                                       ()=> {return {addPostAction: addPostActionCreator, 
                                       updateNewPostTextAction: updateNewPostTextActionCreator} }
                                      )(Profile);
  

export default ProfileConteiner;