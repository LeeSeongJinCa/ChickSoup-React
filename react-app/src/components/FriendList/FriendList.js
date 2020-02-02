import React, { useEffect, useState } from 'react';
import * as Styled from './Styled';
import ProfilePreview from './ProfilePreview';
import FriendListNav from './FriendListNav';
import FriendListSearchBox from './FriendListSearchBox';

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
            <FriendListSearchBox />
            <section>
                <FriendListNav />
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