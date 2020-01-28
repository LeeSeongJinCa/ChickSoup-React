import React from 'react';

const ProfileText = ({ nickname, statusmessage }) => {
    return (
        <div className="profile-info--text">
            <h1>{nickname}</h1>
            <h2>{statusmessage}</h2>
        </div>
    )
};

export default ProfileText;