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
    let emptyFields = []
    if (!title) {
      emptyFields.push("title")
    }
    if (!rating) {
      emptyFields.push("rating")
    }
    if (!image) {
      emptyFields.push("image")
    }
    if (!description) {
      emptyFields.push("description")
    }
    if (emptyFields.length) {
      return res
        .status(400)
        .json({ error: "Please fill in all fields", emptyFields })
    }
    try {
      // we now have access to the user and id from our middleware
      const user_id = req.user._id
      const hike = await Hike.create({
        title,
        rating,
        image,
        description,
        user_id,
      })
      res.status(200).json(hike)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  // delete hike
  deleteHike: async (req, res) => {
    const user_id = req.user._id
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such hike" })
    }

    const hike = await Hike.findById({ _id: id })

    if (!hike) {
      return res.status(404).json({ error: "No such hike" })
    } else if (!user_id.equals(hike.user_id)) {
      console.log(!user_id.equals(hike.user_id))
      console.log("You are not authorized")
      return res.status(401).json({ error: "You are not authorized!" })
    } else {
      // You can proceed with the deletion logic here
      // Make sure to remove the hike from the database
      // and respond with a success message
      await Hike.findByIdAndDelete(id)
      res.status(200).json({ message: "Hike deleted successfully" })
    }
  },

  // update hike
  updateHike: async (req, res) => {
    const { title, rating, image, description } = req.body
    let emptyFields = []
    if (!title) {
      emptyFields.push("title")
    }
    if (!rating) {
      emptyFields.push("rating")
    }
    if (!image) {
      emptyFields.push("image")
    }
    if (!description) {
      emptyFields.push("description")
    }
    if (emptyFields.length) {
      return res
        .status(400)
        .json({ error: "Please fill in all fields", emptyFields })
    }
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
