import React from "react";
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.post}>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post;