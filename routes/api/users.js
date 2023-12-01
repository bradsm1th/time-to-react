const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users");

/*---------- Public Routes ----------*/
router.post("/signup", usersController.signup);
router.post("/login", usersController.login);

/*---------- Protected Routes ----------*/
module.exports = router;

/*---------- Protected Routes ----------*/



