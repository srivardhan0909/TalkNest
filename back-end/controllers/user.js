// const Conversation = require("../modules/conversation")
import User from '../modules/user.js';

export const getSidebarUsers = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      // Handle missing or invalid token
      return res.status(401).json({ message: "Unauthorized: Token is invalid or missing" });
    }

    const loginuser = req.user.userId;

    // Fetch users excluding the logged-in user
    const users = await User.find({ _id: { $ne: loginuser } }).select("-password");

    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getting sidebar users:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

