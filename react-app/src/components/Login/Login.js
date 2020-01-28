import React, { useEffect } from 'react';
import * as Styled from './Styled';
import ChickSoupLogo from '../img/chicksoupLogo.svg';

const Login = ({ onLoadAuth }) => {
    useEffect(() => {
        onLoadAuth(true); // Change background-color to Yellow
    });
    return (
        <Styled.Login>
            <div>
                <div className="login-header">
                    <img src={ChickSoupLogo} alt="chick-soup-logo" />
                </div>
                <div className="login-input-box-wrap">
                    <label>
                        <input type="text" placeholder="이메일" />
                    </label>
                    <label>
                        <input type="password" placeholder="비밀번호" />
                    </label>
                </div>
                <button>LOGIN</button>
                <p><a href="/">회원가입</a></p>
            </div>
        </Styled.Login>
    )

}

export default Login;