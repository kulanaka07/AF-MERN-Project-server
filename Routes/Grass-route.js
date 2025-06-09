const express = require("express");
const {
  signupGrass,
  loginGrass,
  verifyToken,
} = require("../Controllers/Grass-controller");

const router = express.Router();

router.post("/signUpGrass", signupGrass);
router.post("/loginGrass", loginGrass);
router.get("/grass", verifyToken);
module.exports = router;
