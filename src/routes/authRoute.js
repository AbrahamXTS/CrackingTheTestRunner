import express from "express";
import { handleLogin, handleLoginSubmit } from "../controllers/index.js";

export const authRouter = express.Router();

authRouter.get("/login", handleLogin);

authRouter.get("/callback", handleLoginSubmit);