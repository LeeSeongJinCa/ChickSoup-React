import React from 'react';
import StyledLink from '../Common/StyledLink';
import * as Styled from './Styled';
import setting from '../img/setting.svg';
import settingBlack from '../img/settingBlack.svg';

const Header = ({ onLoadAuth, onLoadProfile }) => {
    const nowAuthPage = () => onLoadAuth(true);
    const notAuthPage = () => onLoadAuth(false);
    return (
        <Styled.Header profile={onLoadProfile.toString()}>
            <div>
                <h1 onClick={notAuthPage}>
                    <StyledLink to="/friendlist">Chick Soup</StyledLink>
                </h1>
                <i></i>
            </div>
            <ul>
                <li onClick={nowAuthPage}>
                    <StyledLink to="/friendlist">친구목록보기</StyledLink>
                </li>
                <li onClick={nowAuthPage}>
                    <StyledLink to="/login">채팅하기</StyledLink>
                </li>
                <li onClick={notAuthPage}>
                    <StyledLink to="/setting">
                        <img src={onLoadProfile ? setting : settingBlack} alt="setting" />
                    </StyledLink>
                </li>
            </ul>
        </Styled.Header>
    )
};

export default Header;