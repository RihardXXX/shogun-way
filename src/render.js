import render from './index';
import ReactDOM from "react-dom";
import App from "./App";
import {add_post, update_post_text, update_messages_text, add_message} from "./redux/state";
import React from "react";

export let rerenderTree = (state) => {
    ReactDOM.render(<App state={state} add_post={add_post}
                         update_post_text={update_post_text} update_messages_text={update_messages_text}
                         add_message={add_message}/>, document.getElementById('root'));
}
