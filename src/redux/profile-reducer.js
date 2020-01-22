

let initialState = {
        MyPostData: [{ post: "Text Text Text Text Text Text ", likes: 15 }],
        TextPost: "132"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST": {
            state.MyPostData.push(action.postMessage1);
            state.TextPost = "";
            return state;
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.TextPost = action.newText;
            return state;
        }
        default: return state;
    };
}

export const addPostActionCreator = (postMessage) => ({
    type: "ADD-POST",
    postMessage1: { post: postMessage, likes: 11 }
});

export const updateNewPostTextActionCreator = (newText) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
});

export default profileReducer;  