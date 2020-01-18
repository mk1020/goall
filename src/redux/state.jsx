import { rerenderEntireTree } from "../render";

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
    MyPostData: [{ post1: "Text Text Text Text Text Text ", likes: 15 }]
  }
};

export const addPost = (postMessage) => {
  return state.profilePage.MyPostData.push(postMessage);
};
/* console.log('addPost', postMessage, state.profilePage.MyPostData)
 */
rerenderEntireTree(state);
export default state;