var EmployeeModel = require('../models/employee')

const EmployeeController = {}

EmployeeController.insertEmployee = (req, res, next) => {
  //Fill in the code
  var employee = EmployeeModel.insertEmployee(req.body);
  employee
    .save()
    .then(() => res.status(200).send(employee))
    .catch((e) => res.status(200).send(e));
}

EmployeeController.getAllEmployees = (req, res, next) => {
    //Fill in the code
    var employees = EmployeeModel.getAll();
    employees
      .find({}).where("_id").ne("62279bd4041fc046b97a23da")
      .then((employees) => res.send(employees))
      .catch((e) => res.status(500).send());
}

module.exports = EmployeeController
