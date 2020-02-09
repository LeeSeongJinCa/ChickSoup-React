import styled from 'styled-components';

const ChattingRoom = styled.main`
    width: 1220px;
    margin: 0 auto;
    > section {
        padding-bottom: 80px;
        > ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            > li.new-chat {
                width: 160px;
                margin: 8px 42px 24px;
                text-align: center;
                cursor: pointer;
                > p {
                    font-size: 20px;
                    font-weight: bold;
                }
            } 
            > li:hover {
                border-radius: 16px;
                transform: scale(1.05);
            }
        }
    }
`;

const Room = styled.li`
    width: 160px;
    margin: 8px 42px 24px;
    text-align: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    > div {
        position: relative;
        display: flex;
        justify-content: center;
        width: 160px;
        height: 160px;
        border: 1px solid #1A1A1A;
        border-radius: 16px;
        > img {
            align-self: center;
            max-width: 160px;
            max-height: 160px;
            border-radius: 16px;
        }
        > span {
            position: absolute;
            right: -10px;
            bottom: -10px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #FEC200
        }
    }
    > h2 {
        font-size: 28px;
        margin-bottom: 8px;
        padding: 8px 0;
        border-bottom: 1px solid #1E1E1E;
    }
    > p { font-size: 16px; }
`;

const NewRoomModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    border: 1px solid #1A1A1A;
    border-radius: 16px;
    background-color: white;
    > div {
        position: relative;
        text-align: center;
        > img {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
        > div {
            padding: 12px;
            > input {
                width: 400px;
                margin: 0 auto;
                padding: 8px 12px;
                border: 0;
                border-bottom: 1px solid #1A1A1A;
                outline: none;
            }
        }
        > div.search-room {
            > input {
                font-size: 20px;
            }
        }
        > div.search-friend {
            > input {
                font-size: 16px;
            }
        }
        > div.search-preview {
            width: 90%;
            height: 320px;
            margin: auto;
            border: 1px solid #1A1A1A;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 4px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 8px;
                background-color: #FEE100;
            }
            > div {

            }
        }
        > button {
            width: 240px;
            margin: 32px 0;
            padding: 12px 16px;
            border: 0;
            border-radius: 16px;
            background-color: #FEC200;
            cursor: pointer;
        }
    }
`;

export { ChattingRoom, Room, NewRoomModal };