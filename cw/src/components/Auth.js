// src/components/Auth.js

import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { registerUser , loginUser  } from '../api';
import { useAuth } from '../hooks/useAuth';

const Auth = ({ setToken }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Mock API call for authentication
        if (isLogin) {
            // Simulate login
            if (username === 'user' && password === 'password') {
                setToken('mock-token'); // Set a mock token
                alert('Login successful!');
            } else {
                setError('Invalid username or password.');
            }
        } else {
            // Simulate registration
            alert('Registration successful! You can now log in.');
            setIsLogin(true); // Switch to login after registration
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full transition duration-200 hover:bg-blue-600"
                >
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <p className="mt-4 text-center">
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-500 hover:underline ml-1"
                >
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default Auth;
