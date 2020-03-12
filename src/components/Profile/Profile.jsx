import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} add_post={props.add_post} update_post_text={props.update_post_text}/>
        </div>
    )
};

export default Profile;