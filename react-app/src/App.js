import React, { useState } from 'react';
import Global from './Styled';
import Register from './components/Register/Register';

const App = () => {
    const [page, setPage] = useState(false);
    const FirstCome = () => {
        setPage(true);
    };
    return (
        <div>
            <Global page={page} />
            <Register onLoad={FirstCome} />
        </div>
    )
};

export default App;
