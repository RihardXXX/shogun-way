import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let data_posts =[
        {id: 1, message: 'Hello Guys', like: 10},
        {id: 1, message: 'It is my first post', like: 4}
    ]
    return (
        <div>
            <h3>Мои посты</h3>
            <div className={p.new_post}>
                <textarea className={p.textarea}></textarea>
                <button className={p.button}>отправить пост</button>
            </div>
            <div>
                <Post message={data_posts[0].message} likeCount={data_posts[0].like}/>
                <Post message={data_posts[1].message} likeCount={data_posts[1].like}/>
            </div>
        </div>
    )
};

export default MyPosts;