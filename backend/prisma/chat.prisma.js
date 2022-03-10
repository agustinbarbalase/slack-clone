const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient().chat;

module.exports = {
  createChat: (data) => {
    return prisma.create({
      data,
    });
  },
  findChatById: (id) => {
    return prisma.findUnique({
      where: {
        id,
      },
    });
  },
  editChat: (id, data) => {
    return prisma.update({
      where: {
        id,
      },
      data,
    });
  },
  deleteChat: (id) => {
    return prisma.delete({
      where: {
        id,
      },
    });
  },
};
