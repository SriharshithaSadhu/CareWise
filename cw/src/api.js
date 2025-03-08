// src/api.js

import axios from 'axios';

// Set the base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Adjust this if your backend is hosted elsewhere

// Function to fetch all symptoms
export const fetchSymptoms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/symptoms`);
        return response.data;
    } catch (error) {
        console.error("Error fetching symptoms:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to fetch treatments based on symptom ID
export const fetchTreatments = async (symptomId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/treatments/${symptomId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching treatments:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to fetch nearby hospitals (if you have an endpoint for this)
export const fetchNearbyHospitals = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/hospitals`);
        return response.data;
    } catch (error) {
        console.error("Error fetching nearby hospitals:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to fetch specialist doctors (if you have an endpoint for this)
export const fetchSpecialistDoctors = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/doctors`);
        return response.data;
    } catch (error) {
        console.error("Error fetching specialist doctors:", error);
        throw error; // Rethrow the error for handling in the component
    }
};
