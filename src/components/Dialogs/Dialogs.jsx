import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                <Dialog name="Саня" id="1" css="activ"/>
                <Dialog name="Виктор" id="2"/>
                <Dialog name="Света" id="3"/>
                <Dialog name="Семён" id="4"/>
            </div>
            <div className={d.messagesItem}>
                <div className={d.message}>
                    <Message message="Привет, как твои дела?" acount="I`am"
                             src="https://i.pinimg.com/originals/bc/b3/19/bcb319b817317a6416f9f726bc96747f.jpg"/>
                    <Message message="нормально, а твои?" acount="HE"
                             src="https://www.crazytips.org/wp-content/uploads/2018/06/PicsArt_06-17-05.03.08.jpg"/>
                    <button className={p.button}>отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;