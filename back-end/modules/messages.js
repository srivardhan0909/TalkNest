import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model('message', messageSchema);

// Named export for create method
export const create = (messageData) => Message.create(messageData);

// Export the model as the default export
export default Message;
