import p from "../../Profile/MyPosts/MyPosts.module.css";
import React from "react";
import d from './Message.module.css'


const Message = (props) => {
    return (
        <div className={d.me}>
            <img src={props.src} alt=""/>
            {props.acount}
            <p>
                {props.message}
            </p>
        </div>
    );
}

export default Message;