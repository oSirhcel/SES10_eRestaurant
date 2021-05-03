const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Staff = require("../../models/Staff");

// @route   POST api/staff
// @desc    Register staff
// @access  Private, only by the admin
router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("email", "Valid email is required").isEmail(),
  check("password", "Password needs to be 8 or more characters").isLength({
    min: 8,
  }),
  check("position", "Position is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, position } = req.body;

    try {
      let staff = await Staff.findOne({ email });

      if (staff) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Staff already exists' }] });
      }

      staff = new Staff({
        name,
        email,
        password,
        position
      });

      const salt = await bcrypt.genSalt(10);

      staff.password = await bcrypt.hash(password, salt);

      await staff.save();

      const payload = {
        staff: {
          id: staff.id
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
