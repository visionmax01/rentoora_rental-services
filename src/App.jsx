import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './ClientSide/Login';
import Register from './ClientSide/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import './App.css';
import Homepage from "./Components/homePage/homepage";
import ForgetPassword from "./AuthPages/ForgetPassword";
import OtpPage from "./AuthPages/OtpPage";
import ChangePassword from "./AuthPages/ChangePassword";
import Developer from "./Components/homePage/develober";
import ClientDashHome from "./ClientSide/clientDashHome";
import ClientPost from "./ClientSide/ClintPost";
import { Toaster } from 'react-hot-toast';
import UserLogin from './AuthPages/UserLogin';
import UserRegister from "./AuthPages/userRegister";
import ClientProfile from "./ClientSide/clientProfile";
import AdminDashboard from "./AdminSide/AdminDashboard";
import UserProfile from "./ClientSide/userProfile";
import AboutUs from "./Components/homePage/about";
import OurServices from "./Components/homePage/ourServices.jsx";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<OurServices />} />

          {/* User side separated routes */}
          <Route path="/login-user" element={<UserLogin />} />
          <Route path="/register-user" element={<UserRegister />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/change-password" element={<ChangePassword />} />

          {/* Client side separated routes */}
          <Route path="/client-login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes for authenticated users */}
          <Route element={<ProtectedRoute allowedRoles={[0, 1]} />}>
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/client-profile" element={<ClientProfile />} />
            <Route path="/client-dashboard" element={<ClientDashHome />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/client-post" element={<ClientPost />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <Toaster />
    </>
  );
}

export default App;
