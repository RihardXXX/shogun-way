import React from "react";
import css from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = props.state.friends.friends_list.map(friend => <Friend src={friend.src} name={friend.name}/>);
    return(
        <div className={css.nav}>
            <h4>Друзья</h4>
            {friends}
        </div>
    )
}
export default Friends;