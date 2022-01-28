const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs/dist/bcrypt');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'fuckyouhacker$';

// ROUTE 1: Create a User using POST "/api/auth/createuser". Doesn't require Auth and login
// is below ko ye End point keh raha hein
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether the user with this Email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email alread exists!" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        res.send({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Sorry, internal server Errors occured");
    }
})

// ROUTE 2: Authentication using POST "/api/auth/login". Doesn't require Auth and login
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists(), // exists()-function is used for cannot be empty purpose
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ success, error: "Please try to log in with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to log in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.send({ success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Sorry, internal server Errors occured!");
    }
})


// ROUTE 3: Get Logeding User Details using POST "/api/auth/getuser".  Login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Sorry, internal server Errors occured!");
    }
})

module.exports = router