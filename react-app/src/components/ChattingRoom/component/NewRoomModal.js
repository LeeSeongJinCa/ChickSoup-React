import React, { useCallback, useState } from 'react';
import * as Styled from '../Styled';
import close from '../../img/close.png';

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

const NewRoomModal = ({ modalHandler, createNewRoom }) => {
    const [roomName, setRoomName] = useState("");
    const [search, setSearch] = useState("");

    const onChangeRoomName = useCallback((e) => { setRoomName(e.target.value); }, []);
    const onChangeSearch = useCallback((e) => { setSearch(e.target.value); }, []);
    const searchFilter = useCallback((nickname) => {
        if (search === "") return true;
        if (nickname.indexOf(search) === -1) return false;
        else return true;
    }, [search]);
    const [invited, setInvited] = useState([]);
    const onClickInvitedHandler = useCallback((e, id) => {
        let text = e.target;
        if (text.innerHTML === "초대") {
            setInvited([...invited, +id]);
            text.innerHTML = "초대 함";
        } else {
            const copy = [...invited];
            copy.splice(copy.indexOf(+id), 1);
            setInvited(copy);
            text.innerHTML = "초대";
        }
    }, [invited]);
    const isAbleData = useCallback((friend) => friend.mute || friend.hidden ? false : true, []);
    const getFriendListHtml = useCallback(() => {
        const friendList = friendsData
            .filter((friend) => isAbleData(friend) && searchFilter(friend.nickname))
            .map((friend, i) => {
                return (
                    <div key={i}>
                        <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${friend.id}.png`} alt="profile" />
                        <span>{friend.nickname}</span>
                        <button onClick={(e) => onClickInvitedHandler(e, friend.id)}>
                            초대
                        </button>
                    </div>
                );
            }
            );
        return friendList;
    }, [search]);
    const onClickCreateRoom = useCallback(() => {
        if (invited.length === 0)
            return alert("최소 1명 이상 초대해주세요.");
        if (roomName.trim() === "")
            return alert("채팅방 이름을 입력해주세요.");
        const data = {
            rooms: invited,
            title: roomName,
            people: invited.length,
            recent: false,
        };
        createNewRoom(data);
        setRoomName("");
        setInvited([]);
        setSearch("");
        alert("방을 성공적으로 만들었습니다.");
        modalHandler();
    }, [invited, roomName]);

    return (
        <Styled.NewRoomModal>
            <div>
                <img src={close} alt="closeModal" onClick={modalHandler} />
                <div className="search-room">
                    <input
                        type="text"
                        placeholder="방 이름"
                        value={roomName}
                        onChange={onChangeRoomName}
                    />
                </div>
                <div className="search-friend">
                    <input
                        type="text"
                        placeholder="친구 검색"
                        value={search}
                        onChange={(e) => {
                            onChangeSearch(e);
                        }}
                    />
                </div>
                <div className="search-preview">
                    {getFriendListHtml()}
                </div>
                <button onClick={onClickCreateRoom}>방 만들기</button>
            </div>
        </Styled.NewRoomModal>
    )
};

export default React.memo(NewRoomModal);