import React from 'react';
import star from '../img/star.svg';
import addFriend from '../img/addFriend.svg';
import request from '../img/question.png';
import * as Styled from './Styled';

const FriendListNav = () => {
    return (
        <Styled.FriendListNav>
            <div>
                <img src={star} alt="bookmark" />
                <span>즐겨찾기</span>
            </div>
            <div>
                <img src={addFriend} alt="addFriend" />
                <span>친구 추가</span>
            </div>
            <div>
                <img src={request} alt="request" />
                <span>친구 요청</span>
            </div>
        </Styled.FriendListNav>
    )
};

export default FriendListNav;