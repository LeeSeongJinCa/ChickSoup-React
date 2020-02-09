import React from 'react';
import * as Styled from './Styled';

const SearchFriendResult = ({ searchData }) => {
    const type = ["추가", "수락 대기 중", "수락", "이미 친구입니다."];
    if (searchData.myself) {
        return (<h1>자기 자신은 친구 추가할 수 없습니다.</h1>)
    }
    return (
        <Styled.SearchFriendResult>
            <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${searchData.id}.png`} alt="profile" />
            <h3>{searchData.nickname}</h3>
            <button>{type[searchData.relate]}</button>
        </Styled.SearchFriendResult>
    )
};

export default SearchFriendResult;