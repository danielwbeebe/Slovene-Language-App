const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

// Not sure if this file will be needed - consider deleting

module.exports = userRoutes;
