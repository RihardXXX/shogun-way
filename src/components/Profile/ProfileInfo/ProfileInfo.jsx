import css from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className={css.profile}>
            <img
                src="https://vokrug.tv/pic/product/0/6/f/1/06f1bf67907cb2562c56e6dffe76a2f8.jpeg"
                alt=""/>
            <div className={css.right_block}>
                Имя чувака
                <hr/>
                Описание кто ты по жизни)
            </div>
        </div>
    )
}

export default ProfileInfo;