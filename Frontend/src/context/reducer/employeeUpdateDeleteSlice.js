// employeeUpdateDeleteSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance"; // Update this path

// Define the initial state
const initialState = {
  loading: false,
  error: null,
  data: [],
};

// // Define the asynchronous thunk for updating an employee
// export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ id, data }) => {
//   try {
//     const response = await axiosInstance.put(`/employees/${id}`, data);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// });

// // Define the asynchronous thunk for deleting an employee
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id) => {
    try {
      await axiosInstance.delete(`/employees/${id}`);
      return id; // Return the deleted employee ID for reference
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Create the update and delete slice
const employeeUpdateDeleteSlice = createSlice({
  name: "employeeUpdateDelete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(updateEmployee.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(updateEmployee.fulfilled, (state) => {
      //   state.loading = false;
      // })
      // .addCase(updateEmployee.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted employee from the state
        state.data = state.data.filter(
          (employee) => employee.id !== action.payload
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeUpdateDeleteSlice.reducer;
