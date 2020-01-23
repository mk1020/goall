import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
                <App store={store} />
           </Provider>
        </BrowserRouter >, document.getElementById('root'));
};

rerenderEntireTree();

store.subscribe(() => { rerenderEntireTree() });

serviceWorker.unregister();
