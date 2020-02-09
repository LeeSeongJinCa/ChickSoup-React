import React from 'react';
import defaultCover from '../../img/defaultProfileImage.png';

const ProfileCover = () => {
    return (
        <div className="profile-info--cover">
            <img src={defaultCover} alt="cover-picture" />
        </div>
    )
};

export default ProfileCover;