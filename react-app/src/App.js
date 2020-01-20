import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Global from './Styled';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

const App = () => {
    const [page, setPage] = useState(false);
    const setBackgroundYellow = () => {
        setPage(true);
    };

    return (
        <div>
            <Global page={page} />
            <Route path="/" component={Header} exact />
            <Route path="/register" component={() => <Register onLoad={setBackgroundYellow} />} />
            <Route path="/login" component={() => <Login onLoad={setBackgroundYellow} />} />
        </div>
    )
};

export default App;
