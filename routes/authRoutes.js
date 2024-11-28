const express = require('express');
const {register,login} = require("../controller/authController")
// const login = require('./path/to/login')


const router = express.Router();

router.post("/register",register);
router.post("/login", login);

module.exports = router;