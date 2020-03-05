import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let picture_me = "https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg"
let picture_he = "https://www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg"

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Саня", css: "activ"},
        {id: 2, name: "Виктор"},
        {id: 3, name: "Света"},
        {id: 4, name: "Семён"},
    ]

    let messages = [
        {id: 1, message: "Привет, как твои дела?", src: picture_me, acount: "I`am"},
        {id: 2, message: "нормально, а твои?", src: picture_he, acount: "HE"}
    ]

    let dialog_elements = dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} css={dialog.css}/>)

    let messages_elements = messages.map(
        message => <Message message={message.message} acount={message.acount} src={message.src}/>
    )

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                {dialog_elements}
            </div>
            <div className={d.messagesItem}>
                <div className={d.message}>
                    {messages_elements}
                    <hr/>
                    <div className={d.textarea}></div>
                    <button className={p.button}>отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;