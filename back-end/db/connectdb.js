const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log('Mongodb connected')
  } catch (error) {
    console.log('Error connecting to Mongodb', error)
  }
}

module.exports = connectDB
