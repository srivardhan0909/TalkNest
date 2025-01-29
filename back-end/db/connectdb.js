import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    connect(process.env.MONGO_URL)
    console.log('Mongodb connected')
  } catch (error) {
    console.log('Error connecting to Mongodb', error)
  }
}

export default connectDB
