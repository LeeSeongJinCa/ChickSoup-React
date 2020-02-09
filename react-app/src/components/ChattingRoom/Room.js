import React from 'react';
import * as Styled from './Styled';

const Room = ({ id, hurry, title, people }) => {
    return (
        <Styled.Room>
            <div>
                <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${id}.png`} alt="dms" />
                {hurry && <span></span>}
            </div>
            <h2>{title}</h2>
            <p>{people}</p>
        </Styled.Room>
    )
};

export default Room;