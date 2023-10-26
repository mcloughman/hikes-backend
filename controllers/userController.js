import User from "../models/userModel.js"

// login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" })
}

// signup user
const signupUser = async (req, res) => {
  res.json({ msg: "Signup user" })
}

export { loginUser, signupUser }
