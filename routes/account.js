import express from "express";
import {createAccount, loginAccount } from "../controllers/account.js"

const router = express.Router();

router.post("/register", createAccount);
router.post("/login", loginAccount);

export default router;