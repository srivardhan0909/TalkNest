import { Schema, model } from 'mongoose';

const conversationSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'message',
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = model('conversation', conversationSchema);

// Explicitly export the methods as named exports
export const create = (conversationData) => Conversation.create(conversationData);
export const findOne = (filter) => Conversation.findOne(filter).populate('messages');
export default Conversation;
