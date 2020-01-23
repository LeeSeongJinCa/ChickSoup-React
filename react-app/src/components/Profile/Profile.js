import React, { useEffect } from 'react';
import * as Styled from './Styled';

const Profile = ({ onLoadAuth, onLoadProfile }) => {
    const notAuthPage = () => onLoadAuth(false);
    const nowProfilePage = () => onLoadProfile(true);
    useEffect(() => {
        notAuthPage();
        nowProfilePage();
    });
    return (
        <Styled.Profile>
        </Styled.Profile>
    )
}

export default Profile;