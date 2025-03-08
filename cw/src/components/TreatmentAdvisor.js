// src/components/TreatmentAdvisor.js

import React from 'react';

const TreatmentAdvisor = ({ conditions }) => {
    // Mock treatment advice based on conditions
    const treatmentAdvice = {
        Flu: "Rest, stay hydrated, and consider over-the-counter medications for fever and aches.",
        Cold: "Stay warm, drink fluids, and use decongestants or antihistamines as needed.",
        Allergy: "Avoid allergens, take antihistamines, and consider consulting a doctor for severe reactions."
    };

    return (
        <div className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-2xl mb-4">Treatment Advice</h2>
            {conditions.length > 0 ? (
                <ul className="list-disc pl-5">
                    {conditions.map((condition, index) => (
                        <li key={index} className="mb-2">
                            <strong>{condition}:</strong> {treatmentAdvice[condition] || "Consult a healthcare professional for advice."}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No conditions to provide treatment advice for.</p>
            )}
        </div>
    );
};

export default TreatmentAdvisor;
