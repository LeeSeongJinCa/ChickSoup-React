import styled from 'styled-components';

const ChattingRoom = styled.main`
    width: 1220px;
    margin: 0 auto;
    > section {
        > ul {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            > li {
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
            }
            > li.new-chat > p {
                font-size: 20px;
                font-weight: bold;
            }
            > li:hover {
                border-radius: 16px;
                transform: scale(1.05);
            }
        }
    }
`;

export { ChattingRoom };