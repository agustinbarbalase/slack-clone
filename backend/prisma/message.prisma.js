const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient().message;

module.exports = {
  createMessage: (data) => {
    return prisma.create({
      data,
    });
  },
  findAllMessage: (chatId) => {
    return prisma.findMany({
      where: {
        chatId,
      },
    });
  },
};
