const { Router } = require("express");
const {
  validateUserForLogin,
  validateUserForSignUp,
} = require("../middlewares/validateUser");
const sessionsControllers = require("../controllers/sessions.controllers");
const router = Router();

router.post("/login", validateUserForLogin, sessionsControllers.login);
router.post("/signup", validateUserForSignUp, sessionsControllers.signUp);

module.exports = router;
