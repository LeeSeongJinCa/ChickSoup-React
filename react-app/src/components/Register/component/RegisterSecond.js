import React from 'react';
import * as Styled from '../Styled';
import defaultProfile from '../img/profileBlackWhite.svg';

const RegisterSecond = () => {
    return (
        <Styled.RegisterSecond>
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
        </Styled.RegisterSecond>
    )
};

export default RegisterSecond;