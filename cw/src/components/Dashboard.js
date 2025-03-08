// src/components/Dashboard.js

import React, { useState } from 'react';
import SymptomChecker from './SymptomChecker';
import TreatmentAdvisor from './TreatmentAdvisor';
import UserHistory from './User History';
import NearbyHospitals from './NearbyHospitals'; // Assuming you have this component
import SpecialistDoctors from './SpecialistDoctors'; // Assuming you have this component

const Dashboard = () => {
    const [conditions, setConditions] = useState([]);
    const [history, setHistory] = useState([]);

    const handleSymptomCheck = (symptoms) => {
        // Mock function to simulate checking symptoms
        const foundConditions = checkSymptoms(symptoms); // Assume this function is defined
        setConditions(foundConditions);

        // Update history
        setHistory(prevHistory => [
            ...prevHistory,
            { symptoms, conditions: foundConditions }
        ]);
    };

    // Mock function to simulate checking symptoms
    const checkSymptoms = (inputSymptoms) => {
        // Mock response for demonstration purposes
        const mockConditions = ['Flu', 'Cold', 'Allergy'];
        return mockConditions.filter(condition => inputSymptoms.toLowerCase().includes(condition.toLowerCase()));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl mb-6 text-center">Welcome to CareWise</h1>
            <SymptomChecker setConditions={handleSymptomCheck} />
            <TreatmentAdvisor conditions={conditions} />
            <User History history={history} />
            <NearbyHospitals />
            <SpecialistDoctors />
        </div>
    );
};

export default Dashboard;
