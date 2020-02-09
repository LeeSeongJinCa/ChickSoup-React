import React, { useState, useEffect, useCallback } from 'react';
import * as Styled from './Styled';
import { RegisterFirst, RegisterSecond } from './component';

const Register = ({ onLoadAuth }) => {
    const [next, setNext] = useState(true);

    const movePage = useCallback((bool) => { setNext(bool); }, [setNext]);

    useEffect(() => {
        onLoadAuth(true); // Change background-color to Yellow
    });

    return (
        <Styled.Register>
            <div>
                <div className="register-header">
                    <h1>Chick Soup</h1>
                    <h2>회원가입</h2>
                </div>
                {next ?
                    <>
                        <RegisterFirst />
                        <button onClick={() => { movePage(false); }}>회원가입</button>
                        <p>이미 회원이신가요? <a href="/">로그인</a></p>
                    </> :
                    <>
                        <RegisterSecond />
                        <button onClick={() => { movePage(true); }}>완료</button>
                    </>
                }
            </div>
        </Styled.Register>
    )
}

export default Register;