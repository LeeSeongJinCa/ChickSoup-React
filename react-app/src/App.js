import React, { useState, useEffect, useCallback } from 'react';
import { Route, withRouter, Switch, useLocation } from 'react-router-dom'
import { Chatting, ChattingRoom, FriendList, Login, Profile, Register, SearchFriend, Setting, HideBlockFriendList } from './components';
import Global from './Styled';

const App = () => {
    const location = useLocation();
    const [id, setId] = useState("test");
    const [page, setPage] = useState(false);

    const authPage = useCallback((how) => setPage(how), []);

    useEffect(() => {
        const pathname = location.pathname;
        if (pathname === "/register" || pathname === "/login") {
            authPage(true);
        } else {
            authPage(false);
        }
    }, []);

    return (
        <>
            <Global page={page} />
            {/* // ! root */}
            <Route
                path="/"
                render={() =>
                    <FriendList />
                }
                exact
            />
            {/* // ! register */}
            <Route
                path="/register"
                render={() =>
                    <Register />
                }
            />
            {/* // ! login */}
            <Route
                path="/login"
                render={() =>
                    <Login />
                }
            />
            {/* // ! profile */}
            <Switch>
                <Route
                    path="/profile/:name"
                    render={() =>
                        <Profile />
                    }
                />
                <Route
                    path="/profile"
                    render={() =>
                        <Profile />
                    }
                />
            </Switch>
            {/* // ! setting */}
            <Route
                path="/setting"
                render={() =>
                    <Setting userId={id} />
                }
            />
            {/* // ! hideblockfriendlist */}
            <Route
                path="/hideblockfriendlist"
                render={() =>
                    <HideBlockFriendList />
                }
            />
            {/* // ! searchfriend */}
            <Route
                path="/searchfriend"
                render={() =>
                    <SearchFriend />
                }
            />
            {/* // ! chattingroom */}
            <Route
                path="/chattingroom"
                render={() =>
                    <ChattingRoom />
                }
            />
            {/* // ! chatting */}
            <Route
                path="/chat:roomId"
                render={() =>
                    <Chatting  />
                }
            />
        </>
    )
};

export default React.memo(withRouter(App));
