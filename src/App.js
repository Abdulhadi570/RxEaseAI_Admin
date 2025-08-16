import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import MainLayout from './component/MainLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Prescriptions from './pages/Prescriptions';
import PrescriptionDetails from './pages/PrescriptionDetails';
import Medicines from './pages/Medicines';
import Reminders from './pages/Reminders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Support from './pages/Support';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Main App Routes */}
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="prescriptions/:id" element={<PrescriptionDetails />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
        </Route>
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
