import styled from 'styled-components';
import settingBackground from '../img/background.png';

const Setting = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    min-width: 1220px;
    overflow: hidden;
    > div.setting-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 120vw;
        height: 100vh;
        background-image: url(${settingBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #F6F6F6;
        z-index: -1;
    }
    > div.setting-content {
        width: 1220px;
        margin: 80px auto 0;
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
            div {
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
                transition: 0.2s ease-in-out;
                &:hover {
                    transform: scale(1.1);
                }
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
    }
`;

export { Setting };