import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {rerenderEntireTree} from '../src/render';

rerenderEntireTree(state);

serviceWorker.unregister();
