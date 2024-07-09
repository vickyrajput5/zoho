import { Attendance } from "layouts/attendance/Attendance";
import Dashboard from "layouts/dashboard";
import { LeaveTrack } from "layouts/leavetracker/LeaveTrack";
import Overview from "layouts/profile";
import Tables from "layouts/tables";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import { Team } from "layouts/team/Team";
import React from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";
import { Employee } from "layouts/employee/Employee";

export const AppRoutes = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  console.log('isAuthenticated is:', isAuthenticated);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Dashboard/>
        </ProtectedRoute>} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leavetracker" element={<LeaveTrack />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Overview/>
        </ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <Tables />
        </ProtectedRoute>} />
        <Route path="/employee" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
        <Employee />
        </ProtectedRoute>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
