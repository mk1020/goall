import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, newTextPost} from './redux/state'


export const rerenderEntireTree = (state)=>{
    ReactDOM.render(<App state={state} addPost={addPost} newTextPost={newTextPost}/>, document.getElementById('root'));

};