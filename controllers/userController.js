import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

// create reusable function for login and signup
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    // signup is the static method we created in our userModel
    const user = await User.login(email, password)
    console.log(user._id)
    const token = createToken(user._id)

    res.status(200).json({ email, token, userId: user._id })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    // signup is the static method we created in our userModel
    const user = await User.signup(email, password)

    const token = createToken(user._id)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export { loginUser, signupUser }
