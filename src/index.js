import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";


let rerenderTree = () => {
    ReactDOM.render(<App store={store} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};

rerenderTree();

store.subscribe(rerenderTree);