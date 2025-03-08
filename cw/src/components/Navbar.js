// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { auth, setAuth } = useContext(AuthContext);

    const handleLogout = () => {
        setAuth(null); // Clear the authentication token
        alert('You have logged out.');
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {auth ? (
                    <>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/symptom-checker">Symptom Checker</Link>
                        </li>
                        <li>
                            <Link to="/treatment-advisor">Treatment Advisor</Link>
                        </li>
                        <li>
                            <Link to="/user-history">User  History</Link>
                        </li>
                        <li>
                            <Link to="/nearby-hospitals">Nearby Hospitals</Link>
                        </li>
                        <li>
                            <Link to="/specialist-doctors">Specialist Doctors</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/">Login/Register</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
