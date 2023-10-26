import User from "../models/userModel.js"

// login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" })
}

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body
  try {
    // signup is the static method we created in our userModel
    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export { loginUser, signupUser }
