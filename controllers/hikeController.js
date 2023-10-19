import Hike from "../models/hikeModel.js"
import mongoose from "mongoose"

const hikeControllers = {
  // get all hikes
  getHikes: async (req, res) => {
    try {
      const hikes = await Hike.find({}).sort({ createdAt: -1 })
      res.status(200).json(hikes)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  // get single hike
  getHike: async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }
    const hike = await Hike.findById(id)
    if (!hike) {
      return res.status(404).json({ error: "No such hike" })
    }
    res.status(200).json(hike)
  },

  // post new hike
  createHike: async (req, res) => {
    const { title, rating, image, description } = req.body
    try {
      const hike = await Hike.create({ title, rating, image, description })
      res.status(200).json(hike)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  // delete hike
  deleteHike: async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }
    const hike = await Hike.findOneAndDelete({ _id: id })
    if (!hike) {
      return res.status(404).json({ error: "No such hike" })
    }
    res.status(200).json(hike)
  },

  // update hike
  updateHike: async (req, res) => {
    const { id } = req.params
    const hike = await Hike.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    )
    if (!hike) {
      return response.status(404).json({ error: "No such hike" })
    }
    res.status(200).json(hike)
  },
}

export { hikeControllers }
