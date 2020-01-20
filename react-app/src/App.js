import React, { useState } from 'react';
import Global from './Styled';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const App = () => {
    const [page, setPage] = useState(false);
    const setBackYellow = () => {
        setPage(true);
    };
    return (
        <div>
            <Global page={page} />
            {/* <Register onLoad={setBackYellow} /> */}
            <Login onLoad={setBackYellow} />
        </div>
    )
};

export default App;
