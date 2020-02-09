import React, { useEffect, useReducer } from 'react';
import * as Styled from './Styled';
import friendControl from '../img/friendListControl.svg';
import profileYellow from '../img/profileYellow.svg';
import logout from '../img/logout.svg';
import id from '../img/id.svg';
import StyledLink from '../Common/StyledLink';
import SettingId from './SettingId';

const reducer = (state, action) => {
    switch (action.type) {
        case "showId":
            return { ...state, reducerIdToggle: true, }
        case "hideId":
            return { ...state, reducerIdToggle: false, }
        default:
            return state;
    }
}

const Setting = ({ onLoadAuth, userId }) => {
    const [state, dispatch] = useReducer(reducer, {
        reducerIdToggle: false,
        reducerUserId: userId,
    });
    const { reducerIdToggle, reducerUserId } = state;
    
    const showId = () => dispatch({ type: "showId" });
    const hideId = () => dispatch({ type: "hideId" });

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
                    <StyledLink to="/hideblockfriendlist">
                        <div>
                            <img src={friendControl} alt="friend-control" />
                            <p>차단/숨김 목록 관리</p>
                        </div>
                    </StyledLink>
                    <div onClick={showId}>
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
                {reducerIdToggle && <SettingId reducerUserId={reducerUserId} hideId={hideId} />}
            </div>
        </Styled.Setting>
    )
};

export default Setting;