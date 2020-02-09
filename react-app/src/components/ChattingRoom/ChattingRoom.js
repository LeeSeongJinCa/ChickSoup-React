import React, { useEffect, useCallback, useState } from 'react';
import * as Styled from './Styled';
import SearchBox from '../FriendList/SearchBox';
import ListNav from '../FriendList/ListNav';
import Room from './Room';
import newChat from '../img/newChatting.svg';
import NewRoomModal from './NewRoomModal';

let roomData = [
    {
        rooms: [10, 13, 14, 16],
        title: "DMS1",
        people: 4,
        recent: true,
    }, {
        rooms: [10, 13, 14],
        title: "DMS2",
        people: 3,
        recent: false,
    }, {
        rooms: [10, 13],
        title: "DMS3",
        people: 2,
        recent: true,
    }, {
        rooms: [10],
        title: "DMS4",
        people: 1,
        recent: false,
    }
];

const ChattingRoom = ({ onLoadAuth }) => {
    const [modal, setModal] = useState(false);

    const modalHandler = useCallback(() => { setModal(!modal); }, [modal]);
    const createNewRoom = useCallback((data) => {
        roomData = [...roomData, data];
    }, [roomData]);
    const getRoom = useCallback(() => {
        const rooms = roomData.map((data, i) => {
            return (
                <Room
                    key={i}
                    data={data}
                />
            )
        });
        return rooms;
    }, [roomData]);

    useEffect(() => {
        onLoadAuth();
    }, [])

    return (
        <Styled.ChattingRoom>
            <SearchBox title={"채팅하기"} placeholder={"채팅방 검색"} />
            <ListNav />
            <section>
                <ul>
                    {getRoom()}
                    <li className="new-chat" onClick={modalHandler}>
                        <img src={newChat} alt="newChat" />
                        <p>새 채팅</p>
                    </li>
                    {modal && <NewRoomModal modalHandler={modalHandler} createNewRoom={createNewRoom} />}
                </ul>
            </section>
        </Styled.ChattingRoom>
    )
};

export default ChattingRoom;