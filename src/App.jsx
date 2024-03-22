import { useState } from 'react'
import './App.css'
import DashboardPage from './pages/web-app/DashboardPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/web-site/LandingPage';
import SignUpPage from './pages/web-site/SignUpPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user/home" element={<DashboardPage />} />
        <Route path="/user/savings" element={<DashboardPage />} />
        <Route path="/user/withdrawal" element={<DashboardPage />} />
        <Route path="/user/transaction" element={<DashboardPage />} />
        <Route path="/user/settings" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App