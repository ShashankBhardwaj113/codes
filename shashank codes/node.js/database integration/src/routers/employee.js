const express = require('express')
const Employee = require('../models/employee')
const EmployeeController = require('../controllers/employee')
const router = new express.Router()

//create
router.post('/insertEmployee', EmployeeController.insertEmployee)
//Retrieve
router.get('/listEmployees', EmployeeController.getAllEmployees)

module.exports = router
