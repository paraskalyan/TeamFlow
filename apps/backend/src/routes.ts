import express from "express";
import authRouter from "./modules/auth/auth.route";

const router = express.Router()

router.use('/auth', authRouter)

export default router;