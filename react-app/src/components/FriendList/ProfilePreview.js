import React from 'react';
import * as Styled from './Styled';
import detail from '../img/details.svg';
import hideFriend from '../img/hideFriend.svg';
import blockFriend from '../img/blockFriend.svg';
import removeFriend from '../img/removeFriend.svg';
import bookmarkFriend from '../img/bookmarkFriend.svg';

const ProfilePreview = ({ my, data, onClickShowDetail, detailNum, tagNum }) => {
    /* {
        "id": "1", <string>
        "nickname": "첫 번째 친구의 닉네임", <string>
        "status_message": "첫 번째 친구의 상태 메세지", <string>
        "mute": "첫 번째 친구의 차단 상태", <number : 0 or 1>
        "hidden": "첫 번째 친구의 숨김 상태", <number : 0 or 1>
        "bookmark": "첫 번째 친구의 즐겨찾기 상태" <number : 0 or 1>
    }*/
    return (
        <Styled.ProfilePreview className="profile-preview">
            <div className="profile-preview--img">
                <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${data.id}.png`} alt="profile" />
            </div>
            <div className="profile-preview--text">
                <h4>{data.nickname}</h4>
                <p>{data.status_message}</p>
            </div>
            {!my && <img className="profile-preview--more" src={detail} alt="moreDetails"
                onClick={() => {
                    detailNum === tagNum ? onClickShowDetail(-1) : onClickShowDetail(tagNum);
                }}
            />}
            {(detailNum !== undefined && tagNum !== undefined) && (detailNum === tagNum) &&
                <div className="profile-preview--detail">
                    <ul>
                        <li>
                            <img src={removeFriend} alt="removeFriend" />
                            <span>삭제하기</span>
                        </li>
                        <li>
                            <img src={blockFriend} alt="blockFriend" />
                            <span>차단하기</span>
                        </li>
                        <li>
                            <img src={hideFriend} alt="hideFriend" />
                            <span>숨기기</span>
                        </li>
                        <li>
                            <img src={bookmarkFriend} alt="bookmarkFriend" />
                            <span>즐겨찾기</span>
                        </li>
                    </ul>
                </div>
            }
        </Styled.ProfilePreview>
    )
};

export default ProfilePreview;