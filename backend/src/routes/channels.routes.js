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
  (req, res, next) => isMember(req, res, next, "channel"),
  channelsControllers.getChannel
);
router.post(
  "/",
  (req, res, next) => isMember(req, res, next, "channel"),
  validateChannelForCreate,
  channelsControllers.createChannel
);
router.put(
  "/add/:channelId/:userId",
  isAuthenticated,
  (req, res, next) => isOwner(req, res, next, "channel"),
  validateChannelForMember,
  channelsControllers.addMemberToChannel
);
router.put(
  "/remove/:channelId/:userId",
  isAuthenticated,
  (req, res, next) => isMember(req, res, next, "channel"),
  validateChannelForMember,
  channelsControllers.removeMemberToChannel
);
router.delete(
  "/:channelId",
  isAuthenticated,
  (req, res, next) => isOwner(req, res, next, "channel"),
  channelsControllers.deleteChannel
);

module.exports = router;
