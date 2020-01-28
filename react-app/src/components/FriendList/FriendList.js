import React, { useEffect, useState } from 'react';
import * as Styled from './Styled';
import search from '../img/search.svg';
import star from '../img/star.svg';
import addFriend from '../img/addFriend.svg';
import request from '../img/question.png';
import ProfilePreview from './ProfilePreview';

const friendsData = [
    {
        "id": "1",
        "nickname": "첫 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "2",
        "nickname": "첫 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "10",
        "nickname": "첫 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 1,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "13",
        "nickname": "첫 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 1,
        "bookmark": 0,
    }, 
];

const FriendList = ({ onLoadAuth }) => {
    const [detail, setDetail] = useState(-1);
    const onClickShowDetail = (num) => setDetail(num);
    useEffect(() => {
        onLoadAuth(false);
    }, []);
    const isAbleData = (friend) => {
        const result = friend.mute || friend.hidden ? false : true;
        return result;
    }
    const getFriendListHtml = () => {
        const friendList = friendsData.filter(isAbleData).map((friend, i) => {
            return (
                <ProfilePreview
                    data={friend}
                    key={i}
                    detailNum={detail}
                    tagNum={i}
                    onClickShowDetail={onClickShowDetail}
                />
            )
        });
        return friendList;
    }
    let FriendListHtml = getFriendListHtml();
    useEffect(() => {
        FriendListHtml = getFriendListHtml();
    }, [detail]);
    return (
        <Styled.FriendList>
            <div>
                <h2>내 친구 보기</h2>
                <div>
                    <img src={search} alt="search" />
                    <input type="text" placeholder="친구 검색" />
                </div>
            </div>
            <section>
                <nav>
                    <div>
                        <img src={star} alt="bookmark" />
                        <span>즐겨찾기</span>
                    </div>
                    <div>
                        <img src={addFriend} alt="addFriend" />
                        <span>친구 추가</span>
                    </div>
                    <div>
                        <img src={request} alt="request" />
                        <span>친구 요청</span>
                    </div>
                </nav>
                <div className="myprofile">
                    <h3>내 프로필</h3>
                    <ProfilePreview
                        data={friendsData[2]}
                        my={true}
                    />
                </div>
                <div className="otherprofile">
                    {FriendListHtml}
                </div>
            </section>
        </Styled.FriendList>
    )
}

export default FriendList;