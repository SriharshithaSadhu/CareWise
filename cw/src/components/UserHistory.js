// src/components/UserHistory.js

import React from 'react';

const UserHistory = ({ history }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-2xl mb-4">User  History</h2>
            {history.length > 0 ? (
                <ul className="list-disc pl-5">
                    {history.map((entry, index) => (
                        <li key={index} className="mb-2">
                            <strong>Symptoms:</strong> {entry.symptoms} <br />
                            <strong>Conditions:</strong> {entry.conditions.join(', ')}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No history available. Please check your symptoms to start tracking.</p>
            )}
        </div>
    );
};

export default UserHistory;
