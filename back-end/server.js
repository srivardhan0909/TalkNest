import express, { json } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

import dotenv from 'dotenv'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

import cookieParser from 'cookie-parser'
import connectDB from './db/connectdb.js';
// const { checkAuthCookie } = require('./middleware/auth')

import authRouter from './routes/auth.js'
import messageRouter from './routes/messages.js'
import userRouter from './routes/user.js'
import { app, server } from "./socket/socket.js";

// CORS configuration for production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(json())
app.use(cookieParser())
// app.use(checkAuthCookie('jwt'))

app.use('/api/auth', authRouter) 
app.use('/api/message', messageRouter)
app.use('/api/user', userRouter)

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})
