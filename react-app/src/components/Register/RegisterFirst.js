import React from 'react';

const RegisterFirst = () => {
    return (
        <>
            <div className="register-input-box-wrap">
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
            </div>
            <button>회원가입</button>
            <p>이미 회원이신가요? <a href="/">로그인</a></p>
        </>
    )
}

export default RegisterFirst;