// src/components/NearbyHospitals.js

import React, { useEffect, useState } from 'react';
import { hospitals } from '../data'; // Import static data
//import axios from 'axios';

const NearbyHospitals = () => {
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/hospitals');
                setHospitals(response.data);
            } catch (error) {
                setError('Error fetching hospitals');
                console.error("Error fetching hospitals:", error);
            }
        };

        fetchHospitals();
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-2xl mb-4">Nearby Hospitals</h2>
            {error && <p className="text-red-500">{error}</p>}
            {hospitals.length > 0 ? (
                <ul className="list-disc pl-5">
                    {hospitals.map((hospital, index) => (
                        <li key={index} className="mb-2">
                            <strong>{hospital.name}</strong> - {hospital.distance}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No nearby hospitals found.</p>
            )}
        </div>
    );
};

export default NearbyHospitals;
