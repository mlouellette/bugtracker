import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { useAuth0 } from '@auth0/auth0-react';
import { MDBSpinner } from 'mdb-react-ui-kit';

import './custom.css';

function App() {
    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    return (
        <>
            {isLoading ? (
                <center className="p-5"><MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner></center>
            ) : (
                <Routes>
                    {AppRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            )}
        </>
    );
}

export default App;
