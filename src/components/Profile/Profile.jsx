import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img
                    src="https://vokrug.tv/pic/product/0/6/f/1/06f1bf67907cb2562c56e6dffe76a2f8.jpeg"
                    alt=""/>
                    <div className={p.right_block}>
                        Тут будут дивы с описанием анкеты чувака
                    </div>
                <div>
                    description
                </div>
            </div>
           <MyPosts/>
        </div>

    )
};

export default Profile;