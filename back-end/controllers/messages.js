import { create } from '../modules/messages.js'
import { findOne, create as _create } from '../modules/conversation.js'
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user.userId

    let conversation = await findOne({
      members: { $all: [senderId, receiverId] },
    })

    if (!conversation) {
      conversation = await _create({
        members: [senderId, receiverId],
      })
    }

    const newMessage = await create({
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


    const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

    res.status(201).json(newMessage)
  } catch (error) {
    console.log('Error in sending message', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getMessage = async (req, res) => {
  try {
    const { id: usertoChatId } = req.params
    const senderId = req.user.userId

    const conversation = await findOne({
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


