import mongoose from "mongoose"

const Schema = mongoose.Schema

const hikeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Hike = mongoose.model("Adventure", hikeSchema)
export default Hike
