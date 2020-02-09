import React from 'react';

const ProfileTextEdit = ({ onChange, nickname, statusmessage }) => {
    return (
        <div className="profile-info--text_inputs">
            <div>
                <input 
                    type="text" 
                    onChange={onChange} 
                    name="nickname" 
                    value={nickname} 
                    placeholder="닉네임" 
                /></div>
            <div>
                <input 
                    type="text" 
                    onChange={onChange} 
                    name="statusmessage" 
                    value={statusmessage} 
                    placeholder="상태 메세지" 
                /></div>
        </div>
    )
};

export default ProfileTextEdit;