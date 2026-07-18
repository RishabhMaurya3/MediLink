import express from "express";
import { symptomChecker } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post("/symptom-checker", symptomChecker);

export default aiRouter;