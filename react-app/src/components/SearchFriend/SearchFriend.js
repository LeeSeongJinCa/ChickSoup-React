import React, { useState, useEffect, useRef } from 'react';
import * as Styled from './Styled';
import magnifier from '../img/manifierYellow.png';
import SearchFriendResult from './SearchFriendResult';

// m24YpvMWlY
const searchData = {
    id: 2,
    nickname: "아이디아니고 닉네임",
    myself: false,
    relate: 3,
};

const shakeIt = (target) => {
    target.classList.add("shake");
    setTimeout(() => {
        target.classList.remove("shake");
    }, 500);
};

const SearchFriend = ({ onLoadAuth }) => {
    const [result, setResult] = useState(false);
    const [input, setInput] = useState("");
    const button = useRef(null);
    const showResult = () => {
        if (searchData.myself) shakeIt(button.current.parentNode);
        else if (input.length === 10)
            // Todo if (아이디가 존재하나?)
            if (input === "m24YpvMWlY") setResult(true);
            else shakeIt(button.current.parentNode);
        else shakeIt(button.current.parentNode);
    };
    useEffect(() => {
        onLoadAuth();
    }, []);
    return (
        <Styled.SearchFriend>
            <section>
                <div className="text-box">
                    <h2>Chick Soup</h2>
                    <h3>사용자 검색</h3>
                </div>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="추가할 친구의 ID를 입력하세요." 
                        onKeyPress={(e) => {
                            if (e.key === "Enter") showResult();
                        }}
                        onChange={(e) => {
                            setResult(false);
                            setInput(e.target.value);
                        }}
                        defaulvalue={input}
                    />
                </div>
                <button onClick={showResult} ref={button}>
                    <img src={magnifier} alt="search" />
                </button>
                {result && <SearchFriendResult id={searchData.id} nickname={searchData.nickname} relate={searchData.relate} myself={searchData.myself} />}
            </section>
        </Styled.SearchFriend>
    )
};

export default SearchFriend;