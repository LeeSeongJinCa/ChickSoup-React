import styled from 'styled-components';

const Register = styled.main`
    > div {
        width: 360px;
        margin: 150px auto;
        > div.register-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            > h1 { font-size: 32px; }
            > h2 { font-size: 18px; }
        }
        > button {
            width: 100%;
            margin: 8px 0;
            padding: 6px 8px;
            border: 0;
            border-radius: 16px;
            background-color: #3B1C1C;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        > p {
            text-align: right;
            font-size: 12px;
        }
        > div.userInfo-input-box-wrap {
            
        }
    }
`;

const RegisterFirst = styled.div`
    > label {
        position: relative;
        display: flex;
        margin: 12px 0;
        > input {
            width: 100%;
            padding: 8px 16px;
            border: 1px solid #FEE100;
            border-radius: 16px;
            background-color: white;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
            outline: none;
        }
        > button {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            line-height: 100%;
            padding: 12px 16px;
            border: 0;
            border-radius: 16px;
            background-color: #3B1C1C;
            color: white;
            font-weight: bold;
            cursor: pointer;
        }
    }
    > span {
        padding-left: 12px;
        font-size: 12px;
        color: red;
    }
`;

const RegisterSecond = styled.div`
    > label {
        position: relative;
        display: flex;
        margin: 12px 0;
        > input {
            width: 100%;
            padding: 8px 16px;
            border: 1px solid #FEE100;
            border-radius: 16px;
            background-color: white;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12);
            outline: none;
        }
        > input#profile-input {
            display: none;
        }
        > div {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 240px;
            > img {
                align-self: center;
                margin: 0 auto;
                max-width: 100%;
                max-height: 240px;
                cursor: pointer;
            }
        }
    }
    > span {
        padding-left: 12px;
        font-size: 12px;
        color: red;
    }
`;

export { Register, RegisterFirst, RegisterSecond };