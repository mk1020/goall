export const addInputMessageCharCreator = char => (
  {
    type: "ADD-MESSAGE-CHAR",
    char: char
  });


export const PutFullMessagePageCreator = textAriaNew => ({
  type: "PUT-FULL-MESSAGE-PAGE-CREATOR",
  textAriaNew: textAriaNew
});

let initialState = {
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
  TextMessage: "",
  textAriaNew: "1cc11"
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE-CHAR": {
      return { ...state, textAriaNew: action.char };
    }
    case "PUT-FULL-MESSAGE-PAGE-CREATOR": {
      return { ...state, textAriaNew: "", TextMessage: action.textAriaNew };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
