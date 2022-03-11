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
  isMember: async (req, res, next) => {
    const { userId } = req;
    const { channelId } = req.params;
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
      if (channel) {
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
    const { channelId } = req.params;
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
      if (channel) {
        return next();
      } else {
        return next(new Error("Unauthorizated"));
      }
    } catch (err) {
      next(new Error(err.name));
    }
  },
};
