// // EmployeeGetSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from './axiosInstance'; // Update with the correct path

// // Define the initial state
// const initialState = {
//   employees: [],
//   status: 'idle',
//   error: null,
// };

// // Define the asynchronous thunk for fetching employee data
// export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
//   try {
//     const response = await axiosInstance.get('/employees/all');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// // Create the employee slice
// const EmployeeGetSlice = createSlice({
//   name: 'employees',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployees.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.employees = action.payload;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default EmployeeGetSlice.reducer;
