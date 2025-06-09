const Grass = require("../Models/Grass");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_SECTRET_KEY = "MyKey";

const signupGrass = async (req, res, next) => {
  const { name, username, password } = req.body;
  let existingGrass;

  try {
    existingGrass = await Grass.findOne({ username: username });
  } catch (err) {
    console.log(err);
  }
  if (existingGrass) {
    return res
      .status(400)
      .json({ message: "User already exists. Please Login!!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  const grass = new Grass({
    name,
    username,
    password: hashedPassword,
  });

  try {
    await grass.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: grass });
};

const loginGrass = async (req, res, next) => {
  const { username, password } = req.body;

  let existingGrass;

  try {
    existingGrass = await Grass.findOne({ username: username });
  } catch (err) {
    return new Error(err);
  }

  if (!existingGrass) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPassCorrect = bcrypt.compareSync(password, existingGrass.password);
  if (!isPassCorrect) {
    return res.status(400).json({ message: "Invalid username / password" });
  }
  const token = jwt.sign({ id: existingGrass._id }, JWT_SECTRET_KEY, {
    expiresIn: "1hr",
  });
  return res
    .status(200)
    .json({ message: "Successfully logged in", grass: existingGrass, token });
};
const verifyToken = (req, res, next) => {
  const headers = req.headers["authorization"];
  console.log(headers);
};
exports.signupGrass = signupGrass;
exports.loginGrass = loginGrass;
exports.verifyToken = verifyToken;
