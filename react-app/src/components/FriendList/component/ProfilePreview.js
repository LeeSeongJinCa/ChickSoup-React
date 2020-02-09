import React, { useCallback } from 'react';
import * as Styled from '../Styled';
import detail from '../img/details.svg';
import unBlock from '../img/unBlock.png';
import hideFriend from '../img/hideFriend.svg';
import blockFriend from '../img/blockFriend.svg';
import removeFriend from '../img/removeFriend.svg';
import bookmarkFriend from '../img/bookmarkFriend.svg';

const ProfilePreview = ({ my, data, detailNum, tagNum, onClickDetail }) => {
    const detailFilter = useCallback((e) => {
        // 기본 디테일 열 때
        if (detailNum === -1) { e.target.dataset.num = tagNum; onClickDetail(e); }
        else {
            // 디테일 열은 것을 닫을 때
            if (detailNum === tagNum) { e.target.dataset.num = -1; onClickDetail(e); }
            else {
                // 두 개의 디테일을 왔다갔다 할 때
                if (+e.target.dataset.num === -1 && detailNum !== -1) { e.target.dataset.num = tagNum; onClickDetail(e); }
                // 하나의 디테일이 열려있는 도중 다른 디테일을 열 때
                else { onClickDetail(e); e.target.dataset.num = -1; }
            }
        }
    }, []);

    return (
        <Styled.ProfilePreview className="profile-preview">
            <div className="profile-preview--img">
                <img src={`http://chicksoup.s3.ap-northeast-2.amazonaws.com/media/image/user/profile/${data.id}.png`} alt="profile" />
            </div>
            <div className="profile-preview--text">
                <h4>{data.nickname}</h4>
                <p>{data.status_message}</p>
            </div>
            {!my &&
                <img
                    className="profile-preview--more"
                    src={detail}
                    alt="moreDetails"
                    data-num={tagNum}
                    onClick={detailFilter}
                />
            }
            {(detailNum !== undefined && tagNum !== undefined) && (detailNum === tagNum) &&
                <div className="profile-preview--detail">
                    <ul>
                        {data.mute || data.hidden ?
                            <li>
                                <img src={unBlock} alt="unBlock" />
                                <span>해제하기</span>
                            </li> :
                            <>
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
                            </>
                        }
                    </ul>
                </div>
            }
        </Styled.ProfilePreview>
    )
};

export default ProfilePreview;