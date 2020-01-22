
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
    TextMessage: '',
    textAriaNew: '111'
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE-CHAR": {
            state.textAriaNew = action.newChar;
            return state;
        }
        case 'PUT-FULL-MESSAGE-PAGE-CREATOR': {
            state.textAriaNew = '';
            state.TextMessage = action.sendMessage1;
            return state;
        }
        default: return state;
    }
}



export const addInputMessageCharCreator = (char) => ({
    type: "ADD-MESSAGE-CHAR",
    newChar: char
})

export const PutFullMessagePageCreator = (sendMessage) => ({
    type: "PUT-FULL-MESSAGE-PAGE-CREATOR",
    sendMessage1: sendMessage
})

export default dialogsReducer;