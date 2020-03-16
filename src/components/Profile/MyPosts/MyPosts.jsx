import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let posts = props.store.getState().profile_page.data_posts.map(post => <Post message={post.message} likeCount={post.like}/>);

    let new_post_element = React.createRef();

    let add_post = () => {
        let action = { type: 'ADD_POST'};
        props.dispatch(action);
    };

    const on_post_change = () => {
        let text = new_post_element.current.value;
        let action = { type: 'UPDATE_POST_TEXT', new_text: text};
        props.dispatch(action);
    };

    return (
        <div>
            <h3>Мои посты</h3>
            <div className={p.new_post}>
                <textarea onChange={on_post_change} ref={new_post_element} className={p.textarea}
                          value={props.store.getState().profile_page.new_post_text}/>
                <button onClick={add_post} className={p.button}>отправить пост</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;