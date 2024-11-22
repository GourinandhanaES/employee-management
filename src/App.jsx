import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserManagement from "./components/UserManagement"; 
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<UserManagement />} />
      </Routes>
    </Router>
  )
}

export default App