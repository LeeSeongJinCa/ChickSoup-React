import React, { useEffect } from 'react';
import StyledLink from '../Common/StyledLink';
import * as Styled from './Styled';

const Header = ({ onLoadAuth, onLoadProfile }) => {
    const nowAuthPage = () => onLoadAuth(true);
    const notAuthPage = () => onLoadAuth(false);
    return (
        <Styled.Header profile={onLoadProfile.toString()}>
            <div>
                <h1
                    onClick={notAuthPage}
                ><StyledLink to="/">Chick Soup</StyledLink>
                </h1>
                <i></i>
            </div>
            <ul>
                <li
                    onClick={nowAuthPage}
                ><StyledLink to="/register">친구목록보기</StyledLink>
                </li>
                <li
                    onClick={nowAuthPage}
                ><StyledLink to="/login">채팅하기</StyledLink>
                </li>
                <li
                    onClick={notAuthPage}
                ><StyledLink to="/profile">setting, profile</StyledLink>
                    <i></i>
                </li>
            </ul>
        </Styled.Header>
    )
};

export default Header;