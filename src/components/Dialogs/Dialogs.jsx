import React from "react";
import d from './Dialogs.module.css'
import p from "../Profile/MyPosts/MyPosts.module.css";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                <div className={d.dialog + ' ' + d.active}>Саня</div>
                <div className={d.dialog}>Виктор</div>
                <div className={d.dialog}>Виктор</div>
                <div className={d.dialog}>Виктор</div>
                <div className={d.dialog}>Виктор</div>
            </div>
            <div className={d.messagesItem}>
                <div className={d.message + ' ' + d.active}><h3>message</h3></div>
                <button className={p.button}>отправить сообщение</button>
            </div>
        </div>
    );
};

export default Dialogs;