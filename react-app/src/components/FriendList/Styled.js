import styled from 'styled-components';

const FriendList = styled.main`
    width: 1220px;
    margin: 0 auto;
    > section {
        > div.myprofile > div {
            border-bottom: 2px solid #FEE100;
        }
        > div.otherprofile {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
`;

const HideBlockFriendList = styled.div`
    width: 1220px;
    margin: 0 auto;
    > section {
        div.otherprofile {
            display: flex;
            > div {
                flex: 1;
            }
        }
    }
`;

const ProfilePreview = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 560px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 2px solid #393939;
    > div.profile-preview--img {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        margin-right: 12px;
        > img {
            align-self: center;
            max-width: 100px;
            max-height: 100px;
            border-radius: 16px;
        }
    }
    > div.profile-preview--text {
        line-height: 1.5;
        > h4 { font-size: 14px; }
        > p { font-size: 12px; }
    }
    > img.profile-preview--more {
        position: absolute;
        top: 50%;
        right: 0;
        width: 32px;
        cursor: pointer;
    }
    > div.profile-preview--detail {
        position: absolute;
        top: 50%;
        right: 0;
        padding: 12px 8px;
        border-radius: 8px;
        transform: translate(0, 5%);
        background-color: rgba(30, 30, 30, 0.8);
        color: white;
        z-index: 1;
        > ul > li {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 12px 8px;
            cursor: pointer;
            > img {
                width: 20px;
                height: 20px;
            }
            > span {
                display: inline-block;
                width: 80px;
                height: 16px;
                text-align: right;
                font-size: 12px;
            }
        }
    }
`;

const ListNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
        text-decoration: none;
        color: #1A1A1A;
    }
    div {
        display: flex;
        align-items: center;
        margin: 8px 4px;
        cursor: pointer;
        > img {
            width: 16px;
            height: 16px;
            margin: 0 4px;
        }
        > span { font-size: 12px; }
    }
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0 24px;
    border-bottom: 2px solid #FAE100;
    > h2 { font-size: 28px; }
    > div {
        display: flex;
        height: 32px;
        padding: 0 4px;
        border-radius: 16px;
        background-color: #F1F1F1;
        > img {
            align-self: center;
            height: 50%;
            padding: 0 4px;
            cursor: pointer;
        }
        > input {
            width: 240px;
            height: inherit;
            padding: 0 4px;
            border: 0;
            border-radius: 16px;
            outline: none;
            background-color: #F1F1F1;
        }
    }
`;

export { 
    FriendList, 
    ProfilePreview, 
    ListNav, 
    SearchBox, 
    HideBlockFriendList 
};