import {createStore, compose,combineReducers,applyMiddleware} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage:  dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
})

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
// let store = createStore(reducers,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//       ));

export default store;