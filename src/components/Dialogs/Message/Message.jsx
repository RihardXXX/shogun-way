import p from "../../Profile/MyPosts/MyPosts.module.css";
import React from "react";
import d from './Message.module.css'


const Message = (props) => {
    return (
        <div className={d.me}>
            <div className={d.avatar}>
                <img src={props.src} alt=""/>
                <h4>{props.acount}</h4>
            </div>
            <div className={d.text}>
                <p>
                    {props.message}
                </p>
            </div>

        </div>
    );
}

export default Message;