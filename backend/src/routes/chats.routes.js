const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { isMember, isOwner } = require("../middlewares/isAuthorizated");
const chatsControllers = require("../controllers/chats.controllers");
const router = Router();

router.get(
  "/:channelId/:chatId",
  isAuthenticated,
  (req, res, next) => isMember(req, res, next, "chat"),
  chatsControllers.getChat
);
router.post(
  "/:channelId",
  isAuthenticated,
  (req, res, next) => isOwner(req, res, next, "channel"),
  chatsControllers.createChat
);
router.put(
  "/:channelId/:chatId",
  isAuthenticated,
  (req, res, next) => isOwner(req, res, next, "chat"),
  chatsControllers.editChat
);
router.delete(
  "/:channelId/:chatId",
  isAuthenticated,
  (req, res, next) => isOwner(req, res, next, "chat"),
  chatsControllers.deleteChat
);

module.exports = router;
