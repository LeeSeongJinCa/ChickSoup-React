import React, { useEffect } from 'react';
import * as Styled from './Styled';
import SearchBox from '../FriendList/SearchBox';
import ListNav from '../FriendList/ListNav';

const ChattingRoom = ({ onLoadAuth }) => {
    useEffect(() => {
        onLoadAuth();
    }, [])
    return (
        <Styled.ChattingRoom>
            <SearchBox title={"채팅하기"} placeholder={"채팅방 검색"} />
            <ListNav />
            <section>
                
            </section>
        </Styled.ChattingRoom>
    )
};

export default ChattingRoom;