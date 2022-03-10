const { chatPrisma } = require("../../prisma/index");

module.exports = {
  getChat: async (req, res, next) => {
    const { chatId } = req.params;
    try {
      const foundChat = await chatPrisma.findChatById(chatId);
      res.status(200).send(foundChat);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  createChat: async (req, res, next) => {
    const { channelId } = req.params;
    const { data } = req.body
    try {
      const createdChat = await chatPrisma.createChat({
        ...data,
        channel: {
          connect: {
            id: channelId
          }
        }
      });
      res.status(201).send(createdChat);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  editChat: async (req, res, next) => {
    const { chatId } = req.params;
    const { data } = req.body;
    try {
      const updatedChat = await chatPrisma.editChat(chatId, data);
      res.status(200).send(updatedChat);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  deleteChat: async (req, res, next) => {
    const { chatId } = req.params;
    try {
      const deletedChat = await chatPrisma.deleteChat(chatId);
      res.status(200).send(deletedChat);
    } catch(err) {
      next(new Error(err.name));
    }
  }
}