const express = require('express');
const router = express.Router();
const path = require('path');

const userController = require('../controllers/user-controller');

// /admin/add-user with GET request
router.get('/add-user', userController.getAddUser);

// /admin/add-user with POST request
router.post('/add-user', userController.postAddUser);

// /admin with GET request
router.get('/', userController.postAddUser);

module.exports = router;