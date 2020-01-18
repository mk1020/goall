let state = {
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
    MyPostData: [{ post1: "Text Text Text Text Text Text ", likes: 10 }]
  }
};

export let addPost = (postMessage)=> {
  return (
    state.profilePage.profilePage.MyPostData.push(postMessage)
  );
}
export default state;
