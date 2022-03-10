const { channelPrisma } = require("../../prisma/index");

module.exports = {
  getAllChannels: async (req, res, next) => {
    try {
      const channels = await channelPrisma.findAllChannels();
      res.status(200).send(channels);
    } catch (err) {
      next(new Error(err.name));
    }
  },
  getChannel: async (req, res, next) => {
    const { channelId } = req.params;
    try {
      const channel = await channelPrisma.findChannelById(channelId);
      res.status(200).send(channel);
    } catch (err) {
      next(new Error(err.name));
    }
  },
  createChannel: async (req, res, next) => {
    const { data } = req.body;
    const { userId } = req;
    try {
      const createdChannel = await channelPrisma.createChannel({
        ...data,
        owner: {
          connect: {
            id: userId,
          },
        },
        members: {
          connect: [{ id: userId }],
        },
      });
      res.status(201).send(createdChannel);
    } catch (err) {
      next(new Error(err.name));
    }
  },
  addMemberToChannel: async (req, res, next) => {
    const { channelId, userId } = req.params;
    try {
      const updatedChannel = await channelPrisma.addMemberToChannel(channelId, userId);
      res.status(200).send(updatedChannel);
    } catch (err) {
      next(new Error(err.name));
    }
  },
  removeMemberToChannel: async (req, res, next) => {
    const { channelId, userId } = req.params;
    try {
      const ownerId = await channelPrisma.getOwner(channelId);
      if (userId === ownerId) {
        const updatedChannel = await channelPrisma.removeOwner(channelId);
        res.status(200).send(updatedChannel);
      } else {
        const updatedChannel = await channelPrisma.removeMemberToChannel(
          channelId,
          userId
        );
        res.status(200).send(updatedChannel);
      }
    } catch (err) {
      next(new Error(err.name));
    }
  },
  deleteChannel: async (req, res, next) => {
    const { channelId } = req.params;
    try {
      const deletedChannel = await channelPrisma.deleteChannel(channelId);
      res.status(200).send(deletedChannel);
    } catch (err) {
      next(new Error(err.name));
    }
  },
};
