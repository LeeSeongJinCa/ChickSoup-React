import React from 'react';

const SettingId = ({ reducerUserId, hideId }) => {
    return (
        <article className="show-id">
            <div className="show-id-background" onClick={hideId}></div>
            <div className="show-id-content">
                <div>
                    <h2>당신의 ID는 "{reducerUserId}"입니다.</h2>
                    <span>클립보드에 복사하기</span>
                    <i onClick={hideId}></i>
                </div>
            </div>
        </article>
    )
};

export default SettingId;