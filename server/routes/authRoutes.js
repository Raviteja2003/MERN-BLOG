import express from "express";
import {register,login,home} from "../controllers/authController.js"
import { verifyUser } from './../middlewares/authMiddleware.js';
const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/").get(verifyUser,home);

export default router;