import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
               Мои посты
                <div className={p.new_post}>
                    <textarea  className={p.textarea}></textarea>
                    <button className={p.button}>отправить пост</button>
                </div>
                <div>
                    <Post/>
                </div>
            </div>
    )
};

export default MyPosts;