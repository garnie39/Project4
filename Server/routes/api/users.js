import express from "express";
import { getAllUsers } from "../../controllers/userRegister.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.get("/", getAllUsers);

export default router;