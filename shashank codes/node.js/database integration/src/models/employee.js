const mongoose = require("mongoose");
const validator = require("validator");

const Employee = mongoose.model("Employee", {
  //Fill in the code here
  empid: {
    type: String,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  department: {
    type: String,
  },
  salary: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  awards: {
    type: Array,
  },
});

Employee.insertEmployee = function (employee) {
  //Fill in the code here
  return new Employee(employee);
};

Employee.getAll = function () {
  //Fill in the code here
  return Employee;
};

module.exports = Employee;
