// Logout.js
import { setAuthenticated, setUser } from 'context/reducer/authSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

import {  useNavigate } from 'react-router-dom';


const ProDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear user data and set isAuthenticated to false in Redux
    dispatch(setAuthenticated(false));
    dispatch(setUser(null));
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Redirect to the login page or any other page after logout
    navigate('/signin');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProDropdown;
