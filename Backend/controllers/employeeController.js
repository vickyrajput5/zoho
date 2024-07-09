const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const User = require("../models/User");
const { verifyToken } = require("../config/db");
// Add Employee
router.post("/add", async (req, res) => {
  try {
    const {
      salutation,
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      address1,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
      qualificationname,
      institute,
      qualificationCountry,
      employer,
      position,
      department_name,
      designation_name,
      grade,
      workphone,
      reporting,
      Employeetype,
      role,
      sourceofhire,
      joiningDate,
    } = req.body;

    // Check if the email exists in either the users or employees table
    const existingUser = await User.findOne({ where: { email } });
    const existingEmployee = await Employee.findOne({ where: { email } });

    // Proceed with creating the employee only if the email does not exist in both tables
    if (existingUser || existingEmployee) {
      return res
        .status(409)
        .json({
          status: "error",
          message: "Email already exists in either users or employees table.",
        });
    }

    // Create a new employee
    const newEmployee = await Employee.create({
      salutation,
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      address1,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
      qualificationname,
      institute,
      qualificationCountry,
      employer,
      position,
      department_name,
      designation_name,
      grade,
      workphone,
      reporting,
      Employeetype,
      role,
      sourceofhire,
      joiningDate,
    });

    res
      .status(201)
      .json({
        status: "success",
        message: "Employee added successfully.",
        data: newEmployee,
      });
  } catch (error) {
    console.error("Error adding employee:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

// Update employee by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      salutation,
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      address1,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
      qualificationname,
      institute,
      qualificationCountry,
      employer,
      position,
      department_name,
      designation_name,
      grade,
      workphone,
      reporting,
      Employeetype,
      role,
      sourceofhire,
      joiningDate,
    } = req.body;

    // Fetch the employee by ID
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res
        .status(404)
        .json({ status: "error", message: "Employee not found." });
    }

    // Update employee information
    await employee.update({
      salutation,
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      address1,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
      qualificationname,
      institute,
      qualificationCountry,
      employer,
      position,
      department_name,
      designation_name,
      grade,
      workphone,
      reporting,
      Employeetype,
      role,
      sourceofhire,
      joiningDate,
    });

    res
      .status(200)
      .json({
        status: "success",
        message: "Employee updated successfully.",
        data: employee,
      });
  } catch (error) {
    console.error("Error updating employee:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

// Get All Employee data

router.get("/all", async (req, res) => {
  try {
    // Fetch All employee data
    const employees = await Employee.findAll();

    res.status(200).json({ status: "success", data: employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

// Get Employee by Id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res
        .status(404)
        .json({ status: "error", message: "Employee Not Found" });
    }
    res.status(200).json({ status: "success", data: employee });
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ status: "error", message: "Internal srvar error" });
  }
});

// Delete employee data by id

router.delete("/:id", async (req, res) => {
  try {
    const employeeId = req.params.id;

    const existingEmployee = await Employee.findByPk(employeeId);

    if (!existingEmployee) {
      return res
        .status(404)
        .json({ status: "error", message: "Employee not exist" });
    }

    await existingEmployee.destroy();

    res
      .status(200)
      .json({ status: "success", message: "Employee Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const { email } = req.user; // Extract the email from the token

    const employee = await Employee.findOne({ where: { email } });

    if (employee) {
      res.status(200).json({ status: "success", user: employee });
    } else {
      res.status(404).json({ status: "error", message: "Profile not found" });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

module.exports = router;
