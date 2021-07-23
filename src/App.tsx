import React from 'react';

import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
    return (
        <>
            <h1>Bateria</h1>
            <Dashboard />
            <GlobalStyle />
        </>
    );
};

export default App;
