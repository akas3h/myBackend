import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credintials:true
}))

// for taking json data
app.use(express.json({limit: "16kb"}))

//fot taking file
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// for storing file in public like images, favicon
app.use(express.static("public"))

app.use(cookieParser())

// routes import 

import userRouter from "./routes/user.routes.js"


// routes declaration

app.use("/api/v1/users", userRouter)

export { app }  