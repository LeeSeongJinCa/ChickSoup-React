import React, { useCallback } from 'react';
import * as Styled from './Styled';
import StyledLink from '../Common/StyledLink';
import setting from '../img/setting.svg';
import settingBlack from '../img/settingBlack.svg';

const Header = ({ onLoadAuth, onLoadProfile }) => {

    const nowAuthPage = useCallback(() => onLoadAuth(true), []);
    const notAuthPage = useCallback(() => onLoadAuth(false), []);

    return (
        <Styled.Header profile={onLoadProfile.toString()}>
            <div>
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
                        <StyledLink to="/chattingroom">채팅하기</StyledLink>
                    </li>
                    <li onClick={notAuthPage}>
                        <StyledLink to="/setting">
                            <img src={onLoadProfile ? setting : settingBlack} alt="setting" />
                        </StyledLink>
                    </li>
                </ul>
            </div>
        </Styled.Header>
    )
};

export default Header;