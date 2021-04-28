const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Reservation = require('../../models/Reservation');
const Customer = require('../../models/Customer');
const checkObjectId = require('../../middleware/checkObjectId');

// @route   POST api/reservations
// @desc    Create a reservastion
// @access  Private
