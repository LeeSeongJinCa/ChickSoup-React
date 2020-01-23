import styled from 'styled-components';
import defalutBackground from "../img/defaultBackImg.png";

const Profile = styled.main`
    > div.profile-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        min-width: 1220px;
        background-image: url(${defalutBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        filter: blur(8px);
        > div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            min-width: 1220px;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
    > div.profile-info {
        width: 500px;
        margin: 10% auto 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        > div.profile-info--cover {
            min-width: 80px;
            min-height: 80px;
            max-width: 120px;
            max-height: 120px;
            > img {
                width: 100%;
                height: 100%;
            }
        }
        > div.profile-info--text {
            text-align: center;
            text-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
            > h1 {
                color: white;
                font-size: 24px;
                margin: 16px 0;
            }
            > h2 {
                color: #FEE100;
                font-size: 16px;
                margin-bottom: 16px;
            }
        }
        > nav.profile-info--nav {
            > ul {
                display: flex;
                align-items: center;
                justify-content: center;
                > li {
                    margin: 0 16px;
                    text-align: center;
                    cursor: pointer;
                    > img {
                        width: 45px;
                        height: 45px;
                        margin-bottom: 4px;
                    }
                    > p {
                        color: white;
                        font-size: 12px;
                    }
                }
            }
        }
        > nav.profile-info--cover_buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            > button {
                width: 125px;
                margin: 24px 16px;
                padding: 8px 6px;
                border: 0;
                border-radius: 8px;
                color: #1E1E1E;
                background-color: rgba(255, 255, 255, 0.8);
                font-size: 12px;
                font-weight: bold;
                cursor: pointer;
            }
        }
        > div.profile-info--text_inputs {
            text-align: center;
            > div {
                width: 320px;
                margin-bottom: 12px;
                padding: 8px 12px;
                border-radius: 16px;
                background-color: rgba(255, 255, 255, 0.8);
                box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
                > input {
                    width: 100%;
                    border: 0;
                    background-color: rgba(255, 255, 255, 0);
                    outline: none;
                }
            }
        }
        > button.profile-info--complete {
            margin-top: 12px;
            border: 0;
            padding: 0;
            background-color: rgba(255, 255, 255, 0);
            cursor: pointer;
            > img { width: 60%; }
            > p { color: white; }
        }
    }
`;

export { Profile };