import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './Styled';
import StyledLink from '../Common/StyledLink';
import setting from '../img/setting.svg';
import settingBlack from '../img/settingBlack.svg';
import leftArrow from '../img/leftArrow.svg';
import leftArrowBrown from '../img/leftArrowBrown.svg';

const Header = () => {
    const { pathname } = useLocation();
    const style = pathname === "/profile" ? {
        color: "white",
    } : {
        color: "black",
    }
    return (
        <Styled.Header>
            <div>
                <div>
                    <h1>
                        <StyledLink to="/" style={style}>Chick Soup</StyledLink>
                    </h1>
                    <img 
                        src={pathname === "/profile" ? leftArrow : leftArrowBrown}
                        alt="arrow" 
                    />
                </div>
                <ul>
                    <li>
                        <StyledLink to="/" style={style}>친구목록보기</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/chattingroom" style={style}>채팅하기</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/setting">
                            <img 
                                src={pathname === "/profile" ? setting : settingBlack}
                                alt="setting" 
                            />
                        </StyledLink>
                    </li>
                </ul>
            </div>
        </Styled.Header>
    )
};

export default Header;