import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./AuthPages/Login";
import './App.css';
import Register from "./AuthPages/Register";
import Homepage from "./Components/homePage/homepage";
import ForgetPassword from "./AuthPages/ForgetPassword";
import OtpPage from "./AuthPages/OtpPage";
import ChangePassword from "./AuthPages/ChangePassword";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/change-password" element={<ChangePassword />} />

      </Routes>
    </Router>
  );
}

export default App;
