import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";



const Profile = (props) => {
    return (
        <div>
           <ProfileInfo/>
           <MyPosts data_posts={props.data_posts}/>
        </div>
    )
};

export default Profile;