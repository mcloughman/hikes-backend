import express from "express"
import Hike from "../models/hikeModel.js"
import { hikeControllers } from "../controllers/hikeController.js"
const { createHike, getHikes, getHike } = hikeControllers

const router = express.Router()

// Get all workouts
router.get("/", getHikes)

// Get single workout
router.get("/:id", getHike)

router.post("/", createHike)
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a hike" })
})
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a hike" })
})

export { router }
