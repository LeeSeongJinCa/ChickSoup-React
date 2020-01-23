import styled, { css } from 'styled-components';
import setting from '../img/setting.svg';
import settingBlack from '../img/settingBlack.svg';
import leftArrow from '../img/leftArrow.svg';
import leftArrowBrown from '../img/leftArrowBrown.svg';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px;
    ${props =>
        props.profile === "true" ? css`
    > div {
        position: relative;
        > h1 {
            font-size: 22px;
            letter-spacing: -1.5px;
            > a {
                color: white;
            }
        }
        > i {
            position: absolute;
            left: 0;
            top: 100%;
            width: 48px;
            height: 32px;
            margin-top: 24px;
            background-image: url(${leftArrow});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    > ul {
        display: flex;
        align-items: center;
        justify-content: center;
        > li {
            margin-left: 24px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            > a {
                color: white;
            }
            > i {
                position: absolute;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background-image: url(${setting});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }`
            : css`
    background-color: white;
    > div {
        position: relative;
        > h1 {
            font-size: 22px;
            letter-spacing: -1.5px;
            > a {
                color: #1E1E1E;
            }
        }
        > i {
            position: absolute;
            left: 0;
            top: 100%;
            width: 48px;
            height: 32px;
            margin-top: 24px;
            background-image: url(${leftArrowBrown});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    > ul {
        display: flex;
        align-items: center;
        justify-content: center;
        > li {
            position: relative;
            margin-left: 24px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            > a {
                color: #1E1E1E;
            }
            > i {
                position: absolute;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background-image: url(${settingBlack});
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }`
    }
`;

export { Header };