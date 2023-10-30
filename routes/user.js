import express from "express"
import { loginUser, signupUser } from "../controllers/userController.js"
import requireAuth from "../middleware/requireAuth.js"

const router = express.Router()

// login route
router.post("/login", loginUser)

// signup route
router.post("/signup", signupUser)

export { router }
