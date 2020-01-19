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
      ]
    },

    profilePage: {
      MyPostData: [{ post: "Text Text Text Text Text Text ", likes: 15 }],
      TextPost: "132"
    }
  },

  getState() {
    return this._state;
  },

  addPost(postMessage) {
    this._state.profilePage.MyPostData.push(postMessage);
    this._state.profilePage.TextPost = "";
    this.rerenderEntireTree(this._state);
  },

  newTextPost(newText) {
    this._state.profilePage.TextPost = newText;
    this.rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  }
};
export default store;
