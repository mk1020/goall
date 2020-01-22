import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (store) => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};
rerenderEntireTree(store);

store.subscribe(() => { rerenderEntireTree(store) });

serviceWorker.unregister();
