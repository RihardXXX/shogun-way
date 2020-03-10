import render from './index';
import ReactDOM from "react-dom";
import App from "./App";
import {add_post} from "./redux/state";
import React from "react";

export let rerenderTree = (state) => {
    ReactDOM.render(<App state={state} add_post={add_post}/>, document.getElementById('root'));
}
