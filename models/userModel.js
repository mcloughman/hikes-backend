import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

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
// In addition to the built in methods that mogoose comes with, we can also create our own custom static methods
// No arrow function since we are using the keyword this
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled")
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough")
  }
  const exists = await this.findOne({ email })
  if (exists) {
    throw Error("Email already in use")
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })
  return user
}

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled")
  }
  const user = await this.findOne({ email })
  if (!user) {
    throw Error("Incorrect email")
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error("Incorrect password")
  }
  return user
}
const User = mongoose.model("Individual", userSchema)
export default User
