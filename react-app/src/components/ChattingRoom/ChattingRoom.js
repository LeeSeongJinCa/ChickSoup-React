import React, { useEffect } from 'react';
import * as Styled from './Styled';
import SearchBox from '../FriendList/SearchBox';
import ListNav from '../FriendList/ListNav';
import newChat from '../img/newChatting.svg';

const roomData = [
    {
        rooms: [10, 13, 14, 16],
        title: "DMS1",
        people: 4,
        hurry: true,
    }, {
        rooms: [10, 13, 14],
        title: "DMS2",
        people: 3,
        hurry: false,
    }, {
        rooms: [10, 13],
        title: "DMS3",
        people: 2,
        hurry: true,
    }, {
        rooms: [10],
        title: "DMS4",
        people: 1,
        hurry: false,
    }, {
        rooms: [10],
        title: "DMS4",
        people: 1,
        hurry: true,
    }, {
        rooms: [10],
        title: "DMS4",
        people: 1,
        hurry: false,
    }, {
        rooms: [10],
        title: "DMS4",
        people: 1,
        hurry: true,
    }, 
];

const makeRooms = () => {
    const rooms = roomData.map((room, i) => {
        return (
            <li key={i}>
                <div>
                    <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${room.rooms[0]}.png`} alt="dms" />
                    {room.hurry && <span></span>}
                </div>
                <h2>{room.title}</h2>
                <p>{room.people}</p>
            </li>
        )
    });
    return rooms;
};

const ChattingRoom = ({ onLoadAuth }) => {
    useEffect(() => {
        onLoadAuth();
    }, [])
    return (
        <Styled.ChattingRoom>
            <SearchBox title={"채팅하기"} placeholder={"채팅방 검색"} />
            <ListNav />
            <section>
                <ul>
                    {makeRooms()}
                    <li className="new-chat">
                        <img src={newChat} alt="newChat" />
                        <p>새 채팅</p>
                    </li>
                </ul>
            </section>
        </Styled.ChattingRoom>
    )
};

export default ChattingRoom;