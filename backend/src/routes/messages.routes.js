const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { isMember } = require("../middlewares/isAuthorizated");
const messagesControllers = require("../controllers/messages.controllers");
const router = Router();

router.get(
  "/:channelId/:chatId",
  isAuthenticated,
  isMember,
  messagesControllers.getAllMessage
);
router.post(
  "/:channelId/:chatId",
  isAuthenticated,
  isMember,
  messagesControllers.sendMessage
);

module.exports = router;
