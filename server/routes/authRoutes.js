const express = require('express');
const {register,login,home} = require("../controllers/authController");
const { verifyUser } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/").get(verifyUser,home);
module.exports = router;