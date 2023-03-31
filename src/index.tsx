import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, Store} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {App} from './app';
import './index.css';
import reducer from './store/reducers';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store: Store<State, any> & {
    dispatch: any;
} = createStore(reducer, applyMiddleware(thunk));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
