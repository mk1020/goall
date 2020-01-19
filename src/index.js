import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, newTextPost, subscribe} from './redux/state'


 let rerenderEntireTree = ()=>{
    ReactDOM.render(<App state={state} addPost={addPost} newTextPost={newTextPost}/>, document.getElementById('root'));

};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
serviceWorker.unregister();
