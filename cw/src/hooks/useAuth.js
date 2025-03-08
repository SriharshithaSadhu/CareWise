// src/AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken); // Store token in localStorage
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token'); // Clear token from localStorage
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
