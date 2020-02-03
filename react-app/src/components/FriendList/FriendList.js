import React, { useEffect, useReducer } from 'react';
import * as Styled from './Styled';
import ProfilePreview from './ProfilePreview';
import ListNav from './ListNav';
import SearchBox from './SearchBox';

const friendsData = [
    {
        "id": "1",
        "nickname": "1 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "2",
        "nickname": "2 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "10",
        "nickname": "10 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 1,
        "hidden": 0,
        "bookmark": 0,
    }, {
        "id": "13",
        "nickname": "13 번째 친구의 닉네임",
        "status_message": "첫 번째 친구의 상태 메세지",
        "mute": 0,
        "hidden": 1,
        "bookmark": 0,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "detail":
            return { detail: +action.num }
        default: {
            throw new Error(`unexpected action.type: ${action.type}`);
        }
    }
};

const FriendList = ({ onLoadAuth }) => {
    const [state, dispatch] = useReducer(reducer, {
        detail: -1,
    })
    const { detail } = state;
    const onClickDetail = (e) => {
        dispatch({ type: "detail", num: e.target.dataset.num });
    }
    const isAbleData = (friend) => friend.mute || friend.hidden ? false : true;
    const getFriendListHtml = () => {
        const friendList = friendsData.filter(isAbleData).map((friend, i) => {
            return (
                <ProfilePreview
                    data={friend}
                    key={i}
                    detailNum={detail}
                    tagNum={i}
                    onClickDetail={onClickDetail}
                />
            )
        });
        return friendList;
    }
    let FriendListHtml = getFriendListHtml();
    useEffect(() => {
        FriendListHtml = getFriendListHtml();
    }, [detail]);
    useEffect(() => {
        onLoadAuth(false);
    }, []);
    return (
        <Styled.FriendList>
            <SearchBox title={"내 친구 보기"} placeholder={"친구 검색"} />
            <section>
                <ListNav />
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