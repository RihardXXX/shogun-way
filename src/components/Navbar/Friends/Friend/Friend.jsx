import React from "react";
import css from "../Friends.module.css";

const Friend = (props) => {
    return (
        <div className={css.friend}>
            <img src={props.src} alt="WAW"/>
            {props.name}
        </div>
    );
};
export default Friend;