import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    // so signup email can't be same as another
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})
const User = mongoose.model("Individual", userSchema)
export default User
