import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../db/userSchema.js";

export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashPassword });
  try {
    await newUser.save();
    res.status(200).json({ message: "User registered successfully " });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }
    const verify = bcrypt.compareSync(password, user.password);
    if (!verify) {
      res.staus(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.Jwt_secret);
    const { password: hashPassword, ...rest } = user._doc;
    const response = { token, email: user.email };
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .json(response);
  } catch (error) {
    next(error);
  }
};
