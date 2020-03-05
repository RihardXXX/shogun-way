import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let data_posts =[
        {id: 1, message: 'Hello Guys', like: 10},
        {id: 2, message: 'It is my first post', like: 4},
        {id: 3, message: 'You super guy', like: 22},
        {id: 4, message: 'How are you', like: 4},
    ]

    let posts = data_posts.map(post => <Post message={post.message} likeCount={post.like}/>)

    return (
        <div>
            <h3>Мои посты</h3>
            <div className={p.new_post}>
                <textarea className={p.textarea}></textarea>
                <button className={p.button}>отправить пост</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;