import styled from 'styled-components';
import settingBackground from '../img/background.png';
import close from '../img/close.png';

const Setting = styled.main`
    position: relative;
    height: 100vh;
    min-width: 1220px;
    > div.setting-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        min-width: 1220px;
        background-image: url(${settingBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #F6F6F6;
        z-index: -1;
    }
    > div.setting-content {
        width: 1220px;
        padding-top: 80px;
        margin: 0 auto;
        > h2 {
            padding-bottom: 24px;
            border-bottom: 2px solid #FAE100;
            font-size: 32px;
        }
        > section {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-top: 64px;
            a {
                color: #1E1E1E;
            }
            a > div, > div {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                width: 180px;
                height: 180px;
                padding: 12px;
                border-radius: 20%;
                background-color: white;
                box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                > img {
                    width: 100px;
                    height: 100px;
                }
                > p {
                    margin-top: 16px;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
        > article.show-id {
            > div.show-id-background {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 2;
                background-color: rgba(200, 200, 200, 0.6);
            }
            > div.show-id-content {
                position: fixed;
                top: 50%;
                left: 50%;
                padding: 12px;
                border-radius: 14px;
                transform: translate(-50%, -50%);
                background-color: white;
                z-index: 3;
                > div {
                    position: relative;
                    padding: 12px 32px;
                    text-align: center;
                    line-height: 2;
                    > h2 {
                        font-size: 32px;
                        color: #1E1E1E;
                    }
                    > span {
                        font-size: 12px;
                        color: #3B1C1C;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                    > i {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 12px;
                        height: 12px;
                        background-image: url(${close});
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

export { Setting };