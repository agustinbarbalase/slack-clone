const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient().User;

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
  findUserByEmail: (email) => {
    return prisma.findUnique({
      where: {
        email,
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
