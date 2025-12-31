import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-base-300">
            <Outlet />
        </div>
    );
};

export default AuthLayout;