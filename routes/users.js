import express from "express";
import {createUsers, getUsers, getUserByID, deleteUser, updateUser} from "../controllers/users.js"

const router = express.Router();

router.post("/add", createUsers);
router.post("/getUsers", getUsers);
router.post("/getUserById/:id", getUserByID);
router.post("/deleteUser/:id", deleteUser);
router.post("/updateUser/:id", updateUser);

export default router;