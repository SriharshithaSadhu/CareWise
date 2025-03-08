// public/script.js

// Mock function to simulate checking symptoms
const checkSymptoms = (symptoms) => {
    // Mock response for demonstration purposes
    const mockConditions = ['Flu', 'Cold', 'Allergy'];
    return mockConditions.filter(condition => symptoms.toLowerCase().includes(condition.toLowerCase()));
};

// Handle symptom form submission
document.getElementById('symptom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptoms = document.querySelector('textarea').value;
    const resultsDiv = document.getElementById('symptom-results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    // Check symptoms and display results
    const conditions = checkSymptoms(symptoms);
    if (conditions.length > 0) {
        resultsDiv.innerHTML = `<h3>Possible Conditions:</h3><ul>${conditions.map(condition => `<li>${condition}</li>`).join('')}</ul>`;
    } else {
        resultsDiv.innerHTML = '<p>No conditions found. Please consult a healthcare professional.</p>';
    }
});

// Simple user authentication (mock)
const authContainer = document.getElementById('auth-container');

const renderAuthForm = () => {
    authContainer.innerHTML = `
        <form id="auth-form" class="bg-white p-4 rounded shadow-md">
            <input type="text" id="username" placeholder="Username" required class="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" id="password" placeholder="Password" required class="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full transition duration-200 hover:bg-blue-600">Login</button>
        </form>
    `;
};

const handleAuth = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock authentication logic
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Here you would typically redirect to the dashboard or set user state
    } else {
        alert('Invalid username or password. Please try again.');
    }
};

// Render the authentication form on page load
renderAuthForm();
document.getElementById('auth-container').addEventListener('submit', handleAuth);
