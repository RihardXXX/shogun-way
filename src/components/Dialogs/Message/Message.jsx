import p from "../../Profile/MyPosts/MyPosts.module.css";
import React from "react";
import d from './Message.module.css'


const Message = (props) => {
    let message = props.message;
    let css = d.me;
    let src = props.src
    let acount = props.acount
    return (
        <div className={css}>
            <img src={src} alt=""/>
            {acount}
            <p>
                {message}
            </p>
        </div>
    );
}

export default Message;