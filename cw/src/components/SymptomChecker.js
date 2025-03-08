// src/components/SymptomChecker.js

import React, { useState } from 'react';
import { symptoms } from '../data'; // Import static data

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    // Mock function to simulate checking symptoms
    const checkSymptoms = (inputSymptoms) => {
        // Mock response for demonstration purposes
        const mockConditions = ['Flu', 'Cold', 'Allergy'];
        return mockConditions.filter(condition => inputSymptoms.toLowerCase().includes(condition.toLowerCase()));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setResults([]);

        if (!symptoms) {
            setError('Please enter your symptoms.');
            return;
        }

        // Check symptoms and update results
        const foundConditions = checkSymptoms(symptoms);
        if (foundConditions.length > 0) {
            setResults(foundConditions);
        } else {
            setError('No conditions found. Please consult a healthcare professional.');
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-2xl mb-4">Symptom Checker</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter your symptoms..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    required
                    className="border p-2 mb-4 w-full h-32 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full transition duration-200 hover:bg-blue-600"
                >
                    Check Symptoms
                </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {results.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl">Possible Conditions:</h3>
                    <ul className="list-disc pl-5">
                        {results.map((condition, index) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;
