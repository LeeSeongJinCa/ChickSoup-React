import React, { useState } from 'react';
import * as Styled from './Styled';

const Header = () => {
    return (
        <Styled.Header>
            <div>
                <h1>Chick Soup</h1>
                <i></i>
            </div>
            <ul>
                <li>친구목록보기</li>
                <li>채팅하기</li>
                <li><i></i></li>
            </ul>
        </Styled.Header>
    )
};

export default Header;