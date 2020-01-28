import React from 'react';
import chatting from '../img/chatting.svg';
import setting from "../img/setting.svg";

const ProfileNav = ({ onClick }) => {
    return (
        <nav className="profile-info--nav">
            <ul>
                <li>
                    <img src={chatting} alt="chatting" />
                    <p>나와의 채팅</p>
                </li>
                <li onClick={onClick}>
                    <img src={setting} alt="edit-profile" />
                    <p>프로필 수정</p>
                </li>
            </ul>
        </nav>
    )
};

export default ProfileNav;