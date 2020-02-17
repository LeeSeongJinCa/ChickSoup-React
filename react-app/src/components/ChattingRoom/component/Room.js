import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from '../Styled';

const Room = ({ data }) => {
    const { rooms, title, people, recent, roomId } = data;
    return (
        <Styled.Room>
            <Link to={`/chat/${roomId}`}>
                <div>
                    <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${rooms[0]}.png`} alt="dms" />
                    {recent && <span></span>}
                </div>
                </Link>
            <h2>{title}</h2>
            <p>{people}</p>
        </Styled.Room>
    )
};

export default Room;