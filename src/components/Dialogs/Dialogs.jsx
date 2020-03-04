import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let picture_me = "https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg"
let picture_he = "https://www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg"

const Dialogs = (props) => {
    let data_dialog = [
        {id: 1, name: "Саня", css: "activ"},
        {id: 2, name: "Виктор"},
        {id: 3, name: "Света"},
        {id: 4, name: "Семён"},
    ]

    let data_message = [
        {id: 1, message: "Привет, как твои дела?", src: picture_me, acount: "I`am"},
        {id: 2, message: "нормально, а твои?", src: picture_he, acount: "HE"}
    ]

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                <Dialog name={data_dialog[0].name} id={data_dialog[0].id} css={data_dialog[0].css}/>
                <Dialog name={data_dialog[1].name} id={data_dialog[1].id}/>
            </div>
            <div className={d.messagesItem}>
                <div className={d.message}>
                    <Message message={data_message[0].message} acount={data_message[0].acount}
                             src={data_message[0].src}/>
                    <Message message={data_message[1].message} acount={data_message[1].acount}
                             src={data_message[1].src}/>
                    <hr/>
                    <div className={d.textarea}></div>
                    <button className={p.button}>отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;