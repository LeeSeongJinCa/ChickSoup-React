import React, { useEffect, useReducer, useCallback, useState } from 'react';
import * as Styled from './Styled';
import ProfilePreview from './ProfilePreview';
import FriendListNav from './ListNav';
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
    const [hiddenHtml, setHiddenHtml] = useState([]);
    const [blockedHtml, setBlockedHtml] = useState([]);

    const isBlocked = useCallback((friend) => friend.mute ? true : false, []);
    const isHidden = useCallback((friend) => friend.hidden ? true : false, []);
    const onClickBlockDetail = useCallback((e) => dispatch({ type: "block", num: e.target.dataset.num }), []);
    const onClickHiddenDetail = useCallback((e) => dispatch({ type: "hidden", num: e.target.dataset.num }), []);
    const getFriendListHtml = useCallback((filterType, detailType, onClickType) => {
        const friendList = friendsData.filter(filterType).map((friend, i) => {
            return (
                <ProfilePreview
                    data={friend}
                    key={i}
                    tagNum={i}
                    detailNum={detailType}
                    onClickDetail={onClickType}
                />
            )
        });
        return friendList;
    }, [friendsData]);

    useEffect(() => {
        setBlockedHtml(getFriendListHtml(isBlocked, blockDetail, onClickBlockDetail));
    }, [blockDetail]);
    useEffect(() => {
        setHiddenHtml(getFriendListHtml(isHidden, hiddenDetail, onClickHiddenDetail));
    }, [hiddenDetail]);
    useEffect(() => {
        onLoadAuth(false);
    }, []);
    return (
        <Styled.HideBlockFriendList>
            <SearchBox title={"차단/숨김 친구 보기"} placeholder={"검색"} />
            <section>
                <FriendListNav />
                <div className="otherprofile">
                    <div>
                        <h1>차단</h1>
                        {blockedHtml}
                    </div>
                    <div>
                        <h1>숨김</h1>
                        {hiddenHtml}
                    </div>
                </div>
            </section>
        </Styled.HideBlockFriendList>
    )
}

export default HideBlockFriendList;