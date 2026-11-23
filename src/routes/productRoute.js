import { Router } from "express";
import ProductControllers from "../controllers/ProductControllers.js";


const router = Router();

router.post("/create" , ProductControllers.CreateProduct )

export default router;