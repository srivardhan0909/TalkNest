import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ['Male', 'Female', 'Other'],
    },
    profilePic: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Define the User model
const User = model('user', userSchema);

// Export the User model and the find method
const { find } = User;

export { find };
export default User;
