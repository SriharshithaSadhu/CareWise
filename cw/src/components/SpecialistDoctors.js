// src/components/SpecialistDoctors.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpecialistDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctors');
                setDoctors(response.data);
            } catch (error) {
                setError('Error fetching doctors');
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-2xl mb-4">Specialist Doctors</h2>
            {error && <p className="text-red-500">{error}</p>}
            {doctors.length > 0 ? (
                <ul className="list-disc pl-5">
                    {doctors.map((doctor, index) => (
                        <li key={index} className="mb-2">
                            <strong>{doctor.name}</strong> - {doctor.specialty} <br />
                            <span>Contact: {doctor.contact}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No specialist doctors found.</p>
            )}
        </div>
    );
};

export default SpecialistDoctors;
