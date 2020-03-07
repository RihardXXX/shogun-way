import React from "react";
import css from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return(
        <div className={css.nav}>
            <Friend/>
        </div>
    )
}
export default Friends;