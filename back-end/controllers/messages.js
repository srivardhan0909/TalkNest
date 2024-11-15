const Message = require('../modules/messages')
const Conversation = require('../modules/conversation')

const sendMessage = async (req, res) => {
  try {
    const { text: text } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user.userId

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    })

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      })
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
    })

    // console.log(newMessage)
    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    await newMessage.save()
    await conversation.save()

    res.status(200).json(newMessage)
  } catch (error) {
    console.log('Error in sending message', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getMessage = async (req, res) => {
  try {
    const { id: usertoChatId } = req.params
    const senderId = req.user.userId

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, usertoChatId] },
    }).populate('messages')

    // console.log(conversation)

    if (!conversation) {
      return res.status(200).json({ messages: [] })
    }

    const messages = conversation.messages

    res.status(200).json(messages)
  } catch (error) {
    console.log('Error in sending message', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  sendMessage,
  getMessage,
}
