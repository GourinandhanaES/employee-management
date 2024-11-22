import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  const [role, setRole] = useState("");

  const handleStart = () => {
    if (!role) {
      alert("Please select a role!");
      return;
    }
    localStorage.setItem("userRole", role); 
    window.location.href = "/dashboard"; 
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-center">
      <h1 className="mb-4 display-3 text-light fw-bold">Employee Management App</h1>
      <p className="mb-4 lead text-light">
        Simplify the way you manage employees, roles, and permissions with ease.
      </p>
      <select
        className="form-select w-25 mb-3 fw-bolder"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value=""> Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button className="btn btn-lg" style={{ backgroundColor: "orange" }} onClick={handleStart}>
        GET STARTED
      </button>
    </div>
  );
};

export default LandingPage;