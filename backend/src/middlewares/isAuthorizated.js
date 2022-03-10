const { userPrisma } = require("../../prisma/index");

module.exports = {
  isAdmin: async (req, res, next) => {
    const { role } = req;
    if (role === "Admin") {
      return next();
    } else {
      return next(new Error("Unauthorizated"));
    }
  },
  isMember: async (req, res, next, type) => {
    const { userId } = req;
    const { channelId, chatId } = req.params;
    try {
      const foundUser = await userPrisma.getMember(userId);
      const channel = foundUser.membersChannel.map((item, index) => {
        if (item.id === channelId) {
          return {
            ...item,
            index,
          };
        }
      });
      const chats = foundUser.membersChannel[channel[0].index];
      if (channel && type === "channel") {
        return next();
      } else if (chats.map((item) => item.id === chatId) && type === "chat") {
        return next();
      } else {
        return next(new Error("Unauthorizated"));
      }
    } catch (err) {
      next(new Error(err.name));
    }
  },
  isOwner: async (req, res, next) => {
    const { userId } = req;
    const { channelId, chatId } = req.params;
    try {
      const foundUser = await userPrisma.getMember(userId);
      const channel = foundUser.channelsOwner.map((item, index) => {
        if (item.id === channelId) {
          return {
            ...item,
            index,
          };
        }
      });
      const chats = foundUser.channelsOwner[channel[0].index];
      if (channel && type === "channel") {
        return next();
      } else if (chats.map((item) => item.id === chatId) && type === "chat") {
        return next();
      } else {
        return next(new Error("Unauthorizated"));
      }
    } catch (err) {
      next(new Error(err.name));
    }
  },
};
