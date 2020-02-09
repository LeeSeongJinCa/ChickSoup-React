import React from 'react';
import * as Styled from './Styled';

const RegisterFirst = () => {
    return (
        <Styled.RegisterFirst>
            <label>
                <input type="text" placeholder="이메일(최대 30자)" />
                <button>확인</button>
            </label>
            <span>error1</span>
            <label className="register_input_email_check_hide">
                <input type="text" placeholder="인증 번호 입력" />
                <button>인증</button>
            </label>
            <span>error2</span>
            <label>
                <input type="password" placeholder="비밀번호(최소 8자)" />
            </label>
            <label htmlFor="password-check">
                <input type="password" id="password-check" placeholder="비밀번호 확인" />
            </label>
            <span>error3</span>
        </Styled.RegisterFirst>
    )
};

export default RegisterFirst;