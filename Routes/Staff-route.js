const express = require("express");
const {
  signupStaff,
  loginStaff,
  verifyToken,
} = require("../Controllers/Staff-controller");

const router = express.Router();

router.post("/signUpStaff", signupStaff);
router.post("/loginStaff", loginStaff);
router.get("/staff", verifyToken);
module.exports = router;
