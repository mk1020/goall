const dialogsReducer = (state, action) => {

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