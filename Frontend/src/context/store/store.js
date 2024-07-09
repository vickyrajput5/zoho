import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer"; // Assuming this is your combined rootReducer
import materialUIReducer from "../index"; // Check if this is correctly imported
import authReducer from "../reducer/authSlice.js"; // Check if this is correctly imported
import popoverReducer from "../reducer/PopoverSlice"; // Check if this is correctly imported
import employeeReducer from "../reducer/employeeSlice"; // Check if this is correctly imported
import employeeUpdateDeleteReducer from "../reducer/employeeUpdateDeleteSlice"; // Check if this is correctly imported

const store = configureStore({
  reducer: {
    root: rootReducer, // Assuming this is your root reducer
    materialUI: materialUIReducer, // Assuming this is for material UI state
    auth: authReducer, // Assuming this is for authentication state
    popover: popoverReducer, // Assuming this is for popover state
    employee: employeeReducer, // Assuming this is for employee data state
    employeeUpdateDelete: employeeUpdateDeleteReducer, // Assuming this is for employee update and delete actions
  },
});

export default store;
