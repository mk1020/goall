import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch = {store.dispatch.bind(store)} />, document.getElementById('root'));
};
rerenderEntireTree(store.getState());
console.log('before subscpibe');
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
