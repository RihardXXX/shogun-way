import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.state.data_posts.map(post => <Post message={post.message} likeCount={post.like}/>);

    let new_post_element = React.createRef();

    let add_post = () => {
        let text = new_post_element.current.value;
        props.add_post(text);
    };

    return (
        <div>
            <h3>Мои посты</h3>
            <div className={p.new_post}>
                <textarea ref={new_post_element} className={p.textarea}></textarea>
                <button onClick={ add_post } className={p.button}>отправить пост</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;