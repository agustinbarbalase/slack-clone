const { channelPrisma } = require("../../prisma/index");

module.exports = {
  validateChannelForCreate: (req, res, next) => {
    let { data } = req.body;
    if (!data) {
      return res.status(400).send({
        message: "Data missing",
      });
    }
    if (!data.name) {
      return res.status(400).send({
        message: "Name missing",
      });
    }
    next();
  },
  validateChannelForMember: async (req, res, next) => {
    const { id, userId } = req.params;
    try {
      const channel = await channelPrisma.findChannelById(id);
      const userMember = await userPrisma.findUserById(userId);
      if (!channel || !userMember) {
        return res.status(400).send({
          message: "Channel or User invalid",
        });
      }
      return next();
    } catch (err) {
      next(err);
    }
  },
};
