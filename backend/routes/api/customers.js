const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Customer = require("../../models/customer");

// @route   POST api/customers
// @desc    Register customers
// @access  Public
router.post(
  "/",
  check("firstname", "First name is required").notEmpty(),
  check("lastname", "Last name is required").notEmpty(),
  check("email", "Valid email is required").isEmail(),
  check("password", "Password needs to be 8 or more characters").isLength({
    min: 8,
  }),
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });

    }
    const { firstname, lastname, phone, email, password } = req.body;

    try {
      let customer = await Customer.findOne({ email });

      if (customer) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Customer already exists' }] });
      }

      customer = new Customer({
        firstname,
        lastname,
        phone,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      customer.password = await bcrypt.hash(password, salt);

      await customer.save();

      const payload = {
        customer: {
          id: customer.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
