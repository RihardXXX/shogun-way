import React from "react";
import css from "../Friends.module.css";

const Friend = (props) => {
    return (
        <div className={css.friend}>
            <img src="https://1.bp.blogspot.com/-NglqPxOBChE/UNxjZYY1wII/AAAAAAAAAP4/1s3H7FpgRJM/s1600/Brad+Pitt+1.jpg"
                 alt=""/>
            Brad Pitt
        </div>
    );
};
export default Friend;