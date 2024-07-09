// models/Employee.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Employee = sequelize.define("Employee", {
  salutation: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: null,
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  fathername: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  cnic: {
    type: DataTypes.BIGINT,
    allowNull: true,
    defaultValue: null,
  },
  Phonenumber: {
    type: DataTypes.BIGINT,
    allowNull: true,
    defaultValue: null,
  },
  address1: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  zipcode: {
    type: DataTypes.STRING(45),
    allowNull: true,
    defaultValue: null,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  useAddressForPaymentDetails: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  },
  qualificationname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  institute: {
    type: DataTypes.STRING(200),
    allowNull: true,
    defaultValue: null,
  },
  employer: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  qualificationCountry: {
    type: DataTypes.STRING(200),
    allowNull: true,
    defaultValue: null,
  },
  department_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  designation_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  grade: {
    type: DataTypes.STRING(45),
    allowNull: true,
    defaultValue: null,
  },
  workphone: {
    type: DataTypes.STRING(45),
    allowNull: true,
    defaultValue: null,
  },
  reporting: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  joiningDate: {
    type: DataTypes.DATE,
    allowNull: true, // Adjust this based on your requirements
  },
  Employeetype: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  role: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  reporting: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
});

module.exports = Employee;
