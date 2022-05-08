import express from "express";
import {createAccount } from "../controllers/account.js"

const router = express.Router();

router.post("/register", createAccount);

export default router;