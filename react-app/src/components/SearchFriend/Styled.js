import styled from 'styled-components';
import background from '../img/background.png';

const SearchFriend = styled.main`
    width: 100%;
    min-width: 1220px;
    min-height: 100vh;
    margin: 0 auto;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    > section {
        width: 500px;
        margin: 0 auto;
        padding-top: 100px;
        text-align: center;
        z-index: -1;
        > div.text-box {
            > * { margin: 32px 0; }
            > h2 { color: #FEE100; font-size: 32px; }
            > h3 { font-size: 28px; }
        }
        > div.input-box {
            width: 320px;
            margin: 0 auto;
            padding: 8px 32px;
            border-bottom: 3px solid #FEE100;
            background-color: white;
            > input {
                width: 100%;
                height: 32px;
                margin: 0;
                padding: 0;
                border: 0;
                text-align: center;
                font-size: 18px;
                outline: none;
            }
            > input::placeholder {
                text-align: center;
                font-size: 18px;
            }
        }
        > button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            margin: 24px auto 0;
            padding: 0;
            border: 0;
            border-radius: 50%;
            background-color: #3B1C1C;
            outline: none;
            cursor: pointer;
            > img {
                width: 40%;
                height: 40%;
            }
        }
    }
    .shake {
        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.5s;
        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        0%  { transform: translate(1px, 1px); }
        10% { transform: translate(-1px, -2px); }
        20% { transform: translate(-3px, 0px); }
        30% { transform: translate(3px, 2px); }
        40% { transform: translate(1px, -1px); }
        50% { transform: translate(-1px, 2px); }
        60% { transform: translate(-3px, 1px); }
        70% { transform: translate(3px, 1px); }
        80% { transform: translate(-1px, -1px); }
        90% { transform: translate(1px, 2px); }
        100% { transform: translate(1px, -2px); }
    }
`;

const SearchFriendResult = styled.div`
    width: 500px;
    margin: 10px auto 0;
    text-align: center;
    > img {
        max-height: 100px;
        max-width: 150px;
        padding: 24px;
    }
    > h3 {
        margin: 16px 0;
        font-size: 20px;
    }
    > button {
        padding: 8px 16px;
        border-radius: 24px;
        border: 1.5px solid #3B1C1C;
        font-size: 16px;
        color: #3B1C1C;
        background-color: white;
        outline: none;
        cursor: pointer;
    }
`;

export { SearchFriend, SearchFriendResult };