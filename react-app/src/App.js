import React, { useState, useEffect, useCallback } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import * as components from './AppComponents';

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
            <components.Global page={page} />
            {/* // ! root */}
            <Route
                path="/"
                render={() =>
                    <components.Header
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
                    <components.Register
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! login */}
            <Route
                path="/login"
                render={() =>
                    <components.Login
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! profile */}
            <Switch>
                <Route
                    path="/profile/:name"
                    render={() =>
                        <components.Profile
                            onLoadAuth={authPage}
                            onLoadProfile={profilePage}
                        />
                    }
                />
                <Route
                    path="/profile"
                    render={() =>
                        <components.Profile
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
                    <components.Setting
                        onLoadAuth={authPage}
                        userId={id}
                    />
                }
            />
            {/* // ! friendlist */}
            <Route 
                path="/friendlist"
                render={() => 
                    <components.FriendList 
                        onLoadAuth={authPage}
                    />
                }
            />
            <Route 
                path="/hideblockfriendlist"
                render={() => 
                    <components.HideBlockFriendList
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! searchfriend */}
            <Route
                path="/searchfriend"
                render={() => 
                    <components.SearchFriend
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! chattingroom */}
            <Route
                path="/chattingroom"
                render={() =>
                    <components.ChattingRoom
                        onLoadAuth={authPage}
                    />
                }
            />
            {/* // ! chatting */}
            <Route
                path="/chatting"
                render={() =>
                    <components.Chatting
                        onLoadAuth={authPage}
                    />
                }
            />
        </>
    )
};

export default withRouter(App);
