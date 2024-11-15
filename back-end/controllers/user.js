// const Conversation = require("../modules/conversation")
const User = require('../modules/user')

const getSidebarUsers = async (req, res) => {
  try {
    const loginuser = req.user.userId
    const users = await User.find({ _id: { $ne: loginuser } }).select(
      '-password'
    )

    res.status(200).json(users)
  } catch (error) {
    console.log('Error in getting sidebar users', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  getSidebarUsers,
}
