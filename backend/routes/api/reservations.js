const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Reservation = require('../../models/Reservation');
const Customer = require('../../models/Customer');
const checkObjectId = require('../../middleware/checkObjectId');

// @route   POST api/reservations
// @desc    Create a reservation
// @access  Private

router.post(
    '/',
    auth,
    check('text', 'Text is required').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const customer = await Customer.findById(req.customer.id).select('-password');
  
        const newReservation = new Reservation({
            customer: req.customer.id,
            dateTime: req.data.dateTime, //idk what's in the request for sure could be req.body.dateTime idk
            numPeople: req.data.numPeople
        });
  
        const reservation = await newReservation.save();
  
        res.json(reservation);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );


// @route    DELETE api/reservations/:id
// @desc     Delete a reservation
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
  
      if (!reservation) {
        return res.status(404).json({ msg: 'Reservation not found' });
      }
  
      // Check user
      if (reservation.customer.toString() !== req.customer.id) {
        return res.status(401).json({ msg: 'Customer not authorized' });
      }
  
      await reservation.remove();
  
      res.json({ msg: 'Reservation removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

// @route    GET api/reservations
// @desc     Get all reservations
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
      const reservations = await Reservation.find().sort({ dateTime: -1 });
      res.json(reservations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // @route    GET api/reservations/:id
// @desc     Get reservation by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id);
  
      if (!reservation) {
        return res.status(404).json({ msg: 'Reservation not found' });
      }
  
      res.json(reservation);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });