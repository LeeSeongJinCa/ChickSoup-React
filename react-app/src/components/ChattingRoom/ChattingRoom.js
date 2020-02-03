import React, { useEffect } from 'react';
import * as Styled from './Styled';
import SearchBox from '../FriendList/SearchBox';
import ListNav from '../FriendList/ListNav';
import newChat from '../img/newChatting.svg';
import Room from './Room';

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
                    {roomData.map((data, i) => {
                        return (
                            <Room 
                                key={i}
                                id={data.room[0]} 
                                hurry={data.hurry}
                                title={data.title}
                                people={data.people}
                            />
                        )
                    })}
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