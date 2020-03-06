import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.data_posts.map(post => <Post message={post.message} likeCount={post.like}/>)
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