const { Router } = require("express");
const sessionsControllers = require("../controllers/sessions.controllers");
const router = Router();

router.post("/login", sessionsControllers.login);
router.post("/signup", sessionsControllers.signUp);

module.exports = router;