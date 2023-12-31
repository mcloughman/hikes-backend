import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import mongoose from "mongoose"

// express app
const app = express()
import { router as hikeRoutes } from "./routes/hikes.js"
import { router as userRoutes } from "./routes/user.js"

// middleware
app.use(cors())
app.use(express.json()) // will look to see if there's attached to the request and is it will parse it and attach it to the request object
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/hikes", hikeRoutes)
app.use("/api/user", userRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to database. Listening on ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
