import express from "express"
import Hike from "../models/hikeModel.js"
import { hikeControllers } from "../controllers/hikeController.js"
const { createHike, getHikes, getHike, deleteHike, updateHike } =
  hikeControllers

const router = express.Router()

// Get all workouts
router.get("/", getHikes)

// Get single workout
router.get("/:id", getHike)

router.post("/", createHike)

router.delete("/:id", deleteHike)

router.patch("/:id", updateHike)

export { router }
