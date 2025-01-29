import express, { json } from 'express'

import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import connectDB from './db/connectdb.js';
// const { checkAuthCookie } = require('./middleware/auth')

import authRouter from './routes/auth.js'
import messageRouter from './routes/messages.js'
import userRouter from './routes/user.js'
import { app, server } from "./socket/socket.js";

app.use(json())
app.use(cookieParser())
// app.use(checkAuthCookie('jwt'))

app.use('/api/auth', authRouter) 
app.use('/api/message', messageRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})
