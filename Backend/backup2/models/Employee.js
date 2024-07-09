// models/Employee.js
const db = require('../config/db');

class Employee {
  static getAllEmployees() {
    return db.promise().query('SELECT * FROM employees');
  }

  static getEmployeeById(employeeId) {
    return db.promise().query('SELECT * FROM employees WHERE id = ?', [employeeId]);
  }

  static createEmployee(employeeData) {
    return db.promise().query('INSERT INTO employees SET ?', [employeeData]);
  }

  // Add more methods for updating and deleting employees
}

module.exports = Employee;
