// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define a function to check if a token exists in cookies and local storage
const isTokenStored = () => {
  return (document.cookie.includes('token') || localStorage.getItem('token')) ? true : false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: isTokenStored(),
    user: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    fetchUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setAuthenticated, setUser, logout, fetchUserProfile } = authSlice.actions;

export default authSlice.reducer;
