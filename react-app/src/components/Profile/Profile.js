import React, { useEffect, useState, useReducer } from 'react';
import * as Styled from './Styled';
import { ProfileCover, ProfileText, ProfileNav, ProfileCoverEdit, ProfileTextEdit } from './component';
import complete from '../img/complete.svg';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

const Profile = ({ onLoadAuth, onLoadProfile }) => {
    const [profileEdit, setProfileEdit] = useState(true);
    const [state, dispatch] = useReducer(reducer, {
        nickname: "nickname",
        statusmessage: "statusmessage",
    });
    const onChangeText = (e) => {
        dispatch(e.target);
    };
    const notAuthPage = () => onLoadAuth(false);
    const nowProfilePage = () => onLoadProfile(true);
    const onClickProfileEdit = () => {
        setProfileEdit(!profileEdit);
    }
    useEffect(() => {
        notAuthPage();
        nowProfilePage();
    });
    return (
        <Styled.Profile>
            <div className="profile-background">
                <div></div>
            </div>
            <div className="profile-info">
                <ProfileCover />
                {profileEdit ?
                    <>
                        <ProfileText
                            nickname={state.nickname}
                            statusmessage={state.statusmessage}
                        />
                        <ProfileNav
                            onClick={onClickProfileEdit}
                        />
                    </> :
                    <>
                        <ProfileCoverEdit />
                        <ProfileTextEdit
                            onChange={onChangeText}
                            nickname={state.nickname}
                            statusmessage={state.statusmessage}
                        />
                        <button
                            className="profile-info--complete"
                            onClick={onClickProfileEdit}
                        >
                            <img src={complete} alt="complete-edit" />
                            <p>프로필 수정</p>
                        </button>
                    </>}
            </div>
        </Styled.Profile>
    )
};

export default Profile;