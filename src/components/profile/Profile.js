import React, { useState } from 'react';

const Profile = ({ user }) => {
    return (
        <div className="usersItem p-1">
            <div><h3>{user.name}</h3></div>

            <div style={{ backgroundColor: user.profile_background_color, backgroundImage: user.profile_background_image_url }}>
                <img src={user.profile_image_url} width="150px" height="150px" />
            </div>

            <div style={{ marginTop: 20 }}>
                <button className="btn btn-outline-danger rounded-pill btn-sm" >
                    {user.followers_count} followers
        </button>

                <button className="btn btn-outline-primary rounded-pill btn-sm" >
                    {user.friends_count} following
                </button>
            </div>


        </div>
    )
}

export default Profile;