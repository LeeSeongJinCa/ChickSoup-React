import React, { useState, useEffect, useCallback } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { Chatting, ChattingRoom, FriendList, Header, Login, Profile, Register, SearchFriend, Setting, HideBlockFriendList } from './components';
import Global from './Styled';

const App = ({ location }) => {
    const [id, setId] = useState("test");
    const [page, setPage] = useState(false);
    const [headerInProfile, setHeaderInProfile] = useState(false);

    const authPage = useCallback((how) => setPage(how), []);
    const profilePage = useCallback((how) => setHeaderInProfile(how), []);

    useEffect(() => {
        if (location.pathname === "/") {
            authPage(false);
        }
        if (location.pathname.split("/")[1] === "profile") {
            setHeaderInProfile(true);
        } else {
            setHeaderInProfile(false);
        }
    }, [location]);

    return (
        <>
            <Global page={page} />
            {/* // ! root */}
            <Route
                path="/"
                render={() =>
                    <Header
                        onLoadAuth={authPage}
                        onLoadProfile={headerInProfile}
                    />
                }
                exact={page}
            />
            {/* // ! register */}
            <Route
                path="/register"
                render={() =>
                    <Register
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! login */}
            <Route
                path="/login"
                render={() =>
                    <Login
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! profile */}
            <Switch>
                <Route
                    path="/profile/:name"
                    render={() =>
                        <Profile
                            onLoadAuth={authPage}
                            onLoadProfile={profilePage}
                        />
                    }
                />
                <Route
                    path="/profile"
                    render={() =>
                        <Profile
                            onLoadAuth={authPage}
                            onLoadProfile={profilePage}
                        />
                    }
                />
            </Switch>
            {/* // ! setting */}
            <Route
                path="/setting"
                render={() =>
                    <Setting
                        onLoadAuth={authPage}
                        userId={id}
                    />
                }
            />
            {/* // ! friendlist */}
            <Route
                path="/friendlist"
                render={() =>
                    <FriendList
                        onLoadAuth={authPage}
                    />
                }
            />
            <Route
                path="/hideblockfriendlist"
                render={() =>
                    <HideBlockFriendList
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! searchfriend */}
            <Route
                path="/searchfriend"
                render={() =>
                    <SearchFriend
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! chattingroom */}
            <Route
                path="/chattingroom"
                render={() =>
                    <ChattingRoom
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! chatting */}
            <Route
                path="/chatting"
                render={() =>
                    <Chatting
                        onLoadAuth={authPage}
                    />
                }
            />
        </>
    )
};

export default withRouter(App);
