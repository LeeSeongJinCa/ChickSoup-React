import React from 'react';
import * as Styled from '../Styled';

const Room = ({ data }) => {
    return (
        <Styled.Room>
            <div>
                <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${data.rooms[0]}.png`} alt="dms" />
                {data.recent && <span></span>}
            </div>
            <h2>{data.title}</h2>
            <p>{data.people}</p>
        </Styled.Room>
    )
};

export default Room;