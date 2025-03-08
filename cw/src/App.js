import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import SymptomChecker from "./components/SymptomChecker";
import TreatmentAdvisor from "./components/TreatmentAdvisor";
import UserHistory from "./components/UserHistory";
import NearbyHospitals from "./components/NearbyHospitals";
import SpecialistDoctors from "./components/SpecialistDoctors";
import Auth from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/symptoms" element={<SymptomChecker />} />
          <Route path="/treatment" element={<TreatmentAdvisor />} />
          <Route path="/history" element={<UserHistory />} />
          <Route path="/hospitals" element={<NearbyHospitals />} />
          <Route path="/doctors" element={<SpecialistDoctors />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
