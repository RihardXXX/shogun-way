import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post/Post";
import {add_post_action_creator, update_on_post_text_action_creator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {
    let posts = props.store.getState().profile_page.data_posts.map(post => <Post message={post.message}
                                                                                 likeCount={post.like}/>);
    let add_post = () => {
        let action = add_post_action_creator();
        props.dispatch(action);
    };

    const on_post_change = (e) => {
        let text = e.target.value; // texteare click
        let action = update_on_post_text_action_creator(text);
        props.dispatch(action);
    };

    return (
        <div>
            <h3>Мои посты</h3>
            <div className={p.new_post}>
                <textarea onChange={on_post_change} className={p.textarea}
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