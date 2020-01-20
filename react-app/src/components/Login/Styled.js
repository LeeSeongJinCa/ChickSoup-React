import styled from 'styled-components';

const Login = styled.main`
    > div {
        width: 360px;
        margin: 150px auto;
        > div.login-header {
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                height: 160px;
                margin-bottom: 8px;
            }
        }
        > div.login-input-box-wrap {
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
            }
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
    }
`;

export { Login };