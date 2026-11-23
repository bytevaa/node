import { Router } from "express" // Router с большой буквы
import authController from "../controllers/authController.js" // Добавлено расширение .js

const router = Router()

router.post("/registration", authController.register)

export default router
