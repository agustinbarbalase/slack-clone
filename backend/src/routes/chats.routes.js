const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { isMember, isOwner } = require("../middlewares/isAuthorizated");
const chatsControllers = require("../controllers/chats.controllers");
const router = Router();

router.get(
  "/:channelId/:chatId",
  isAuthenticated,
  isMember,
  chatsControllers.getChat
);
router.post(
  "/:channelId",
  isAuthenticated,
  isOwner,
  chatsControllers.createChat
);
router.put(
  "/:channelId/:chatId",
  isAuthenticated,
  isOwner,
  chatsControllers.editChat
);
router.delete(
  "/:channelId/:chatId",
  isAuthenticated,
  isOwner,
  chatsControllers.deleteChat
);

module.exports = router;
