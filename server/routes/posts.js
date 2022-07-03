import express, { request, response } from "express";
import { getPost, createPost } from "../controllers/psots.js";

const router = express.Router();

router.get("/", getPost);
router.get("/", createPost);

export default router;
