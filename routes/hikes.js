import express from "express"
import Hike from "../models/hikeModel.js"
import { hikeControllers } from "../controllers/hikeController.js"
import requireAuth from "../middleware/requireAuth.js"
const { createHike, getHikes, getHike, deleteHike, updateHike } =
  hikeControllers

const router = express.Router()

// Get all workouts
router.get("/", getHikes)

// Get single workout
router.get("/:id", getHike)

router.post("/", requireAuth, createHike)

router.delete("/:id", requireAuth, deleteHike)

router.patch("/:id", requireAuth, updateHike)

export { router }
