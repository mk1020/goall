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
      
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  /*   addPost(postMessage) {
    this._state.profilePage.MyPostData.push(postMessage);
    this._state.profilePage.TextPost = "";
    this.rerenderEntireTree(this._state);
  }, */

  /*  newTextPost(newText) {
    this._state.profilePage.TextPost = newText;
    this.rerenderEntireTree(this._state);
  }, */

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._state.profilePage.MyPostData.push(action.postMessage1);
      this._state.profilePage.TextPost = "";
      this.rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.TextPost = action.newText;
      this.rerenderEntireTree(this._state);
    } else if (action.type === "ADD-MESSAGE-CHAR") {
      this._state.dialogsPage.textAriaNew=action.newChar;
      this.rerenderEntireTree(this._state); 
    } else if (action.type === 'PUT-FULL-MESSAGE-PAGE-CREATOR') {
       this._state.dialogsPage.textAriaNew ='';
       this._state.dialogsPage.TextMessage=action.sendMessage1;
       this.rerenderEntireTree(this._state);
    }
  }
};
export const addPostActionCreator = (postMessage) => ({
  type: "ADD-POST",
  postMessage1: { post: postMessage, likes: 11 }
});

export const updateNewPostTextActionCreator = (newText) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: newText
});

export const addInputMessageCharCreator = (char) => ({
      type: "ADD-MESSAGE-CHAR",
      newChar: char
})

export const PutFullMessagePageCreator = (sendMessage)=>({
  type: "PUT-FULL-MESSAGE-PAGE-CREATOR",
  sendMessage1: sendMessage
})

export default store;
