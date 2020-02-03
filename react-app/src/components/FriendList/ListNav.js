import React from 'react';
import { Link } from 'react-router-dom';
import star from '../img/star.svg';
import addFriend from '../img/addFriend.svg';
import request from '../img/question.png';
import * as Styled from './Styled';

const ListNav = () => {
    return (
        <Styled.ListNav>
            <div>
                <img src={star} alt="bookmark" />
                <span>즐겨찾기</span>
            </div>
            <Link to="/searchfriend">
                <div>
                    <img src={addFriend} alt="addFriend" />
                    <span>친구 추가</span>
                </div>
            </Link>
            <Link to="/searchfriend">
                <div>
                    <img src={request} alt="request" />
                    <span>친구 요청</span>
                </div>
            </Link>
        </Styled.ListNav>
    )
};

export default ListNav;