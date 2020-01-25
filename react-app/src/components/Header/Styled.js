import styled, { css } from 'styled-components';
import leftArrow from '../img/leftArrow.svg';
import leftArrowBrown from '../img/leftArrowBrown.svg';

const Header = styled.header`
    display: flex;
    min-width: 1100px;
    align-items: center;
    justify-content: space-between;
    padding: 24px 60px;
    > div {
        position: relative;
        > h1 {
            font-size: 30px;
            letter-spacing: -1.5px;
        }
        > i {
            position: absolute;
            left: 0;
            top: 100%;
            width: 48px;
            height: 32px;
            margin-top: 24px;
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
            > i {
                position: absolute;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }
    ${props =>
        props.profile === "true" ? css`
    a { color: white; }
    i { background-image: url(${leftArrow}); }
    img { width: 20px; }`
            : css`
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    background-color: white;
    a { color: #1E1E1E; }
    > div > i { ackground-image: url(${leftArrowBrown}); }
    > ul > li img { width: 20px; }`
    }`;

export { Header };