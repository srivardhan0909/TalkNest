const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const connectDB = require('./db/connectdb')
// const { checkAuthCookie } = require('./middleware/auth')

const authRouter = require('./routes/auth')
const messageRouter = require('./routes/messages')
const userRouter = require('./routes/user')

app.use(express.json())
app.use(cookieParser())
// app.use(checkAuthCookie('jwt'))

app.use('/api/auth', authRouter) 
app.use('/api/message', messageRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`)
})
