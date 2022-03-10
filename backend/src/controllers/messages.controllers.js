const { messagePrisma } = require("../../prisma/index");

module.exports = {
  getAllMessage: async (req, res, next) => {
    const { chatId } = req.params;
    try {
      const foundMessages = await messagePrisma.findAllMessage(chatId);
      res.status(200).send(foundMessages);
    } catch (err) {
      next(new Error(err.name));
    }
  },
  sendMessage: async (req, res, next) => {
    const { chatId } = req.params;
    const { data } = req.body;
    try {
      const createdMessage = await messagePrisma.createMessage({
        ...data,
        chat: {
          connect: {
            id: chatId,
          },
        },
      });
      res.status(201).send(createdMessage);
    } catch (err) {
      next(new Error(err.name));
    }
  },
};
