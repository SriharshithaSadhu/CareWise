// src/AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import { login, register } from '../api';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const login = (newToken) => {
        setToken(newToken);
        // You can also store the token in localStorage or sessionStorage if needed
        localStorage.setItem('token', newToken);
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token'); // Clear the token from storage
    };

    const isAuthenticated = () => {
        return !!token; // Returns true if token exists
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
