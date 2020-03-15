import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";


let rerenderTree = () => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

rerenderTree();

store.subscribe(rerenderTree);