import React from 'react';
import * as Styled from './Styled';
import close from '../img/close.png';
import ProfilePreview from '../FriendList/ProfilePreview';

const NewRoomModal = () => {
    return (
        <Styled.NewRoomModal>
            <div>
                <img src={close} alt="closeModal" />
                <div className="search-room">
                    <input type="text" placeholder="방 이름" />
                </div>
                <div className="search-friend">
                    <input type="text" placeholder="친구 검색" />
                </div>
                <div>
                    {/* <ProfilePreview /> */}
                </div>
                <button>방 만들기</button>
            </div>
        </Styled.NewRoomModal>
    )
};

export default NewRoomModal;