// authActions.js
import { fetchUserProfile } from './authSlice';
import axiosInstance from './axiosInstance';

export const getUserProfile = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/auth/profile');
    const { status, user } = response.data;

    if (status === 'success') {
        console.log('Received user profile data:', user);
      dispatch(fetchUserProfile(user));
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
};
