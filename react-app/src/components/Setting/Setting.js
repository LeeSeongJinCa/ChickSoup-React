import React, { useEffect } from 'react';
import * as Styled from './Styled';
import friendControl from '../img/friendListControl.svg';
import profileYellow from '../img/profileYellow.svg';
import logout from '../img/logout.svg';
import id from '../img/id.svg';
import StyledLink from '../Common/StyledLink';

const Setting = ({ onLoadAuth }) => {
    useEffect(() => {
        onLoadAuth(false);
    });
    return (
        <Styled.Setting>
            <div className="setting-background"></div>
            <div className="setting-content">
                <h2>Chick Soup 설정</h2>
                <section>
                    <StyledLink to="/profile">
                        <div>
                            <img src={profileYellow} alt="change-profile" />
                            <p>프로필 변경</p>
                        </div>
                    </StyledLink>
                    <StyledLink to="/friendList">
                        <div>
                            <img src={friendControl} alt="friend-control" />
                            <p>차단/숨김 목록 관리</p>
                        </div>
                    </StyledLink>
                    <div>
                        <img src={id} alt="check-id" />
                        <p>ID 확인</p>
                    </div>
                    <StyledLink to="/login">
                        <div>
                            <img src={logout} alt="logout" />
                            <p>로그아웃</p>
                        </div>
                    </StyledLink>
                </section>
            </div>
        </Styled.Setting>
    )
};

export default Setting;