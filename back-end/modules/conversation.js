const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message',
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Conversation = mongoose.model('conversation', conversationSchema)

module.exports = Conversation
