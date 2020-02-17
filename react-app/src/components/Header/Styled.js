import styled from 'styled-components';

const Header = styled.header`
    min-width: 1220px;
    padding: 24px 0;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1220px;
        margin: 0 auto;
        > div {
            position: relative;
            > h1 {
                font-size: 30px;
                letter-spacing: -1.5px;
            }
            > img {
                position: absolute;
                left: 0;
                top: 100%;
                width: 48px;
                height: 32px;
                margin-top: 32px;
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
                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;

export { Header };