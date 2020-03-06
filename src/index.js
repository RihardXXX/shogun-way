import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: "Саня", css: "activ"},
    {id: 2, name: "Виктор"},
    {id: 3, name: "Света"},
    {id: 4, name: "Семён"},
]

let picture_me = "https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg"
let picture_he = "https://www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg"

let messages = [
    {id: 1, message: "Привет, как твои дела?", src: picture_me, acount: "I`am"},
    {id: 2, message: "нормально, а твои?", src: picture_he, acount: "HE"}
]

let data_posts =[
    {id: 1, message: 'Hello Guys', like: 10},
    {id: 2, message: 'It is my first post', like: 4},
    {id: 3, message: 'You super guy', like: 22},
    {id: 4, message: 'How are you', like: 4},
]


ReactDOM.render(<App dialogs={dialogs} messages={messages} data_posts={data_posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
