import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {add_message_action_creator, update_mesage_action_creator} from "../../redux/state";




const Dialogs = (props) => {
    let dialog_elements = props.store.getState().dialogs_page.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} css={dialog.css}/>)
    let messages_elements = props.store.getState().dialogs_page.messages.map(
        message => <Message message={message.message} acount={message.acount} src={message.src}/>
    );

    let new_message = React.createRef();

    let add_message = () => {
        let action = add_message_action_creator();
        props.dispatch(action);
    };

    let update_mesage = () => {
        let new_text = new_message.current.value;
        let action = update_mesage_action_creator(new_text);
        props.dispatch(action);
    };


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                {dialog_elements}
            </div>
            <div className={d.messagesItem}>
                <div className={d.message}>
                    {messages_elements}
                    <hr/>
                    <textarea onChange={update_mesage} value={props.store.getState().dialogs_page.new_messages_text} ref={new_message} className={d.textarea}/>
                    <button onClick={add_message} className={p.button}>отправить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;