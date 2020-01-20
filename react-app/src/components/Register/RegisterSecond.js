import React from 'react';
import defaultProfile from '../img/profileBlackWhite.svg';

const RegisterSecond = ({ onClick }) => {
    return (
        <>
            <div className="userInfo-input-box-wrap">
                <label htmlFor="profile-input">
                    <div>
                        <img src={defaultProfile} alt="profileImage" title="Click me and Change your profile!" />
                    </div>
                    <input type="file" id="profile-input" />
                </label>
                <label className="userInfo-input-box">
                    <input type="text" placeholder="닉네임(최소 3자 최대 12자)" />
                </label>
                <span>error1</span>
            </div>
            <button onClick={() => {
                onClick(true);
            }}>완료</button>
        </>
    )
};

export default RegisterSecond;