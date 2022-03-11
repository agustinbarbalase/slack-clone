const { Router } = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { isMember, isOwner } = require("../middlewares/isAuthorizated");
const {
  validateChannelForCreate,
  validateChannelForMember,
} = require("../middlewares/validateChannel");
const channelsControllers = require("../controllers/channels.controllers");
const router = Router();

router.get("/", channelsControllers.getAllChannels);
router.get(
  "/:channelId",
  isAuthenticated,
  isMember,
  channelsControllers.getChannel
);
router.post(
  "/",
  isAuthenticated,
  isMember,
  validateChannelForCreate,
  channelsControllers.createChannel
);
router.put(
  "/add/:channelId/:userId",
  isAuthenticated,
  isOwner,
  validateChannelForMember,
  channelsControllers.addMemberToChannel
);
router.put(
  "/remove/:channelId/:userId",
  isAuthenticated,
  isMember,
  validateChannelForMember,
  channelsControllers.removeMemberToChannel
);
router.delete(
  "/:channelId",
  isAuthenticated,
  isOwner,
  channelsControllers.deleteChannel
);

module.exports = router;
