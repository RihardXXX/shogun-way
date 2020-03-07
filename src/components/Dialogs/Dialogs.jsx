import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";




const Dialogs = (props) => {
    let dialog_elements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} css={dialog.css}/>)
    let messages_elements = props.state.messages.map(
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