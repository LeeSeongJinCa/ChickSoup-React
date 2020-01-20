import React, { useState } from 'react';
import * as Styled from './Styled';
import RegisterFirst from './RegisterFirst';
import RegisterSecond from './RegisterSecond';

const Register = ({ onLoad }) => {
    // Change background-color to Yellow
    window.onload = onLoad;
    const [next, setNext] = useState(true);
    const movePage = (bool) => {
        setNext(bool);
    };
    return (
        <Styled.Register>
            <div>
                <div className="register-header">
                    <h1>Chick Soup</h1>
                    <h2>회원가입</h2>
                </div>
                {next ? <RegisterFirst onClick={movePage} /> : <RegisterSecond onClick={movePage} />}
            </div>
        </Styled.Register>
    )
}

export default Register;
