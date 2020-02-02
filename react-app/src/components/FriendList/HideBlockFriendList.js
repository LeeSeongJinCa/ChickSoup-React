import React, { useEffect, useReducer } from 'react';
import * as Styled from './Styled';
import ProfilePreview from './ProfilePreview';
import FriendListNav from './FriendListNav';
import FriendListSearchBox from './FriendListSearchBox';

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
        case "reset":
            return { blockDetail: -1, hiddenDetail: -1 }
        case "block":
            return { ...state, blockDetail: +action.num }
        case "hidden":
            return { ...state, hiddenDetail: +action.num }
        default: {
            throw new Error(`unexpected action.type: ${action.type}`);
        }
    }
};

const HideBlockFriendList = ({ onLoadAuth }) => {
    const [state, dispatch] = useReducer(reducer, {
        blockDetail: -1,
        hiddenDetail: -1,
    })
    const { blockDetail, hiddenDetail } = state;
    const onClickBlockDetail = (e) => dispatch({ type: "block", num: e.target.dataset.num });
    const onClickHiddenDetail = (e) => dispatch({ type: "hidden", num: e.target.dataset.num });
    
    const isBlocked = (friend) => friend.mute ? true : false;
    const isHidden = (friend) => friend.hidden ? true : false;
    const getBlockedFriendListHtml = () => {
        const friendList = friendsData.filter(isBlocked).map((friend, i) => {
            return (
                <ProfilePreview
                    data={friend}
                    key={i}
                    tagNum={i}
                    detailNum={blockDetail}
                    onClickDetail={onClickBlockDetail}
                />
            )
        });
        return friendList;
    };
    const getHiddenFriendListHtml = () => {
        const friendList = friendsData.filter(isHidden).map((friend, i) => {
            return (
                <ProfilePreview
                    data={friend}
                    key={i}
                    tagNum={i}
                    detailNum={hiddenDetail}
                    onClickDetail={onClickHiddenDetail}
                />
            )
        });
        return friendList;
    };
    let blockedFriendListHtml = getBlockedFriendListHtml();
    let hiddenFriendListHtml = getHiddenFriendListHtml();
    useEffect(() => {
        blockedFriendListHtml = getBlockedFriendListHtml();
    }, [blockDetail]);
    useEffect(() => {
        hiddenFriendListHtml = getHiddenFriendListHtml();
    }, [hiddenDetail]);
    useEffect(() => {
        onLoadAuth(false);
    }, []);
    return (
        <Styled.HideBlockFriendList>
            <FriendListSearchBox />
            <section>
                <FriendListNav />
                <div className="otherprofile">
                    <div>
                        <h1>차단</h1>
                        {blockedFriendListHtml}
                    </div>
                    <div>
                        <h1>숨김</h1>
                        {hiddenFriendListHtml}
                    </div>
                </div>
            </section>
        </Styled.HideBlockFriendList>
    )
}

export default HideBlockFriendList;