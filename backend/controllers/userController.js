import User from "../models/User.js";

// Generate random 6-digit ID
const generateUniqueID = async () => {
  let id;
  let exists = true;
  while (exists) {
    id = Math.floor(100000 + Math.random() * 900000).toString();
    exists = await User.findOne({ userID: id });
  }
  return id;
};

export const createUser = async (req, res) => {
  try {
    const userID = await generateUniqueID();
    const user = new User({ userID });
    await user.save();
    res.status(201).json({ userID });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ userID: req.params.userID });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { questions, currentPage, screeningResult } = req.body;

    const user = await User.findOneAndUpdate(
      { userID: req.params.userID },
      {
        ...(questions && { questions }),
        ...(currentPage && { currentPage }),
        ...(screeningResult && { screeningResult }),
      },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Update failed", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // latest first
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};
