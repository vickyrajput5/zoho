// employeeSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance"; // Update this path

// Define the initial state
const initialState = {
  loading: false,
  error: null,
  employees: [],
  selectedEmployee: null, // To store the selected employee data
};

// Define the asynchronous thunk for fetching all employees
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    try {
      const response = await axiosInstance.get("/employees/all");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Define the asynchronous thunk for adding an employee
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employeeData) => {
    try {
      const response = await axiosInstance.post("/employees/add", employeeData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
// Define the asynchronous thunk for fetching an employee by ID
export const fetchEmployeeById = createAsyncThunk(
  "employees/fetchEmployeeById",
  async (employeeId) => {
    try {
      const response = await axiosInstance.get(`/employees/${employeeId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
// Define the asynchronous thunk for updating an employee by ID
export const updateEmployeeById = createAsyncThunk(
  "employees/updateEmployeeById",
  async ({ id, updatedData }) => {
    try {
      const response = await axiosInstance.put(`/employees/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Create the employee slice
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // Add any synchronous reducers if needed
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEmployee = action.payload;
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEmployee = action.payload;
      })
      .addCase(updateEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
