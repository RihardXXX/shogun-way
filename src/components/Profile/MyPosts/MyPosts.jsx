import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
            <div>
               Мои посты
                <div className={p.new_post}>
                    <textarea  className={p.textarea}></textarea>
                    <button className={p.button}>отправить пост</button>
                </div>
                <div>
                    <Post message='Hello Guys' likeCount='10' />
                    <Post message='It is my first post' likeCount='2' />
                </div>
            </div>
    )
};

export default MyPosts;