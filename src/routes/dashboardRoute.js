import express from "express";
import { handleHome, handleGetRepositorie } from "../controllers/index.js";

export const dashboardRouter = express.Router();

dashboardRouter.get("/", handleHome);

dashboardRouter.get("/repositorie/:id", handleGetRepositorie);