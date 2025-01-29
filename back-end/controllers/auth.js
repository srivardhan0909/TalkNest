import bcrypt from 'bcryptjs'; // Import the default export
import generateTokenAndSetCookie from '../utils/generateToken.js';
import User from '../modules/user.js';

// Destructure the required methods
const { hash, compare } = bcrypt;

const signup = async (req, res) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Password does not match' });
  }

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  const newUser = await User.create({
    fullname,
    username,
    password: await hash(password, 10), // Use the hashed password
    gender,
    profilePic: gender === 'Male' ? boyProfilePic : girlProfilePic,
  });

  try {
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'User could not be created' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // console.log(user)
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await compare(password, user.password); // Compare passwords
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'User login failed' });
  }
};

const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 }); // Clear the cookie
    res.status(200).json({ message: 'User logout successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'User logout failed' });
  }
};

export default { signup, login, logout };
