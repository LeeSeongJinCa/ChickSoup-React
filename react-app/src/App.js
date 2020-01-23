import React, { useState, useEffect } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import * as components from './AppComponents';
import Setting from './components/Setting/Setting';

const App = ({ location }) => {
    const [page, setPage] = useState(false);
    const [headerInProfile, setHeaderInProfile] = useState(false);
    const authPage = (how) => {
        setPage(how);
    };
    const profilePage = (how) => {
        setHeaderInProfile(how);
    };
    useEffect(() => {
        if (location.pathname === "/") {
            authPage(false);
        }
        if (location.pathname.split("/")[1] === "profile") {
            setHeaderInProfile(true);
        } else {
            setHeaderInProfile(false);
        }
    });
    return (
        <>
            <components.Global page={page} />
            {/* // ! root */}
            <Route
                path="/"
                component={() => 
                    <components.Header 
                        onLoadAuth={authPage} 
                        onLoadProfile={headerInProfile}
                    />}
                exact={page}
            />
            {/* // ! register */}
            <Route
                path="/register"
                component={() => 
                    <components.Register 
                        onLoadAuth={authPage} 
                    />}
            />
            {/* // ! login */}
            <Route
                path="/login"
                component={() => 
                    <components.Login 
                        onLoadAuth={authPage} 
                    />}
            />
            {/* // ! profile */}
            <Switch>
                <Route
                    path="/profile/:name"
                    component={() =>
                        <components.Profile
                            onLoadAuth={authPage}
                            onLoadProfile={profilePage}
                        />}
                />
                <Route
                    path="/profile"
                    component={() =>
                        <components.Profile
                            onLoadAuth={authPage}
                            onLoadProfile={profilePage}
                        />}
                />
            </Switch>
            {/* // ! setting */}
            <Route 
                path="/setting"
                component={() => 
                    <components.Setting 
                        onLoadAuth={authPage}
                    />}
            />
        </>
    )
};

export default withRouter(App);
