import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Mike" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Will" }
      ],

      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you" },
        { id: 4, message: "How are you feeling?" }
      ],
      TextMessage: '',
      textAriaNew: '111'
    },

    profilePage: {
      MyPostData: [{ post: "Text Text Text Text Text Text ", likes: 15 }],
      TextPost: "132"
      
    },
    sidebar: {}
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);       

    this.rerenderEntireTree(this._state);
  }
};


export default store;
