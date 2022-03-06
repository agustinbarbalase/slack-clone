const { PrismaClient } = require("@prisma/client");
const prisma = PrismaClient.User;

module.exports = {
  createUser: (data) => {
    return prisma.create({
      data,
    });
  },
  findUserById: (id) => {
    return prisma.findUnique({
      where: {
        id,
      },
    });
  },
  editUser: (id, data) => {
    return prisma.update({
      where: {
        id,
      },
      data,
    });
  },
  deleteUser: (id) => {
    return prisma.delete({
      where: {
        id,
      },
    });
  },
};
