import React from 'react';
import search from '../img/search.svg';
import * as Styled from './Styled';

const FriendListSearchBox = () => {
    return (
        <Styled.FriendListSearchBox>
            <h2>내 친구 보기</h2>
            <div>
                <img src={search} alt="search" />
                <input type="text" placeholder="친구 검색" />
            </div>
        </Styled.FriendListSearchBox>
    )
};

export default FriendListSearchBox;