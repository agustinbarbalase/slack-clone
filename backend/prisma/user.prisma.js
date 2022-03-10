const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient().User;

module.exports = {
  createUser: (data) => {
    return prisma.create({
      data,
    });
  },
  findAllUsers: () => {
    return prisma.findMany();
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
  getMember: (id) => {
    return prisma.findUnique({
      where: {
        id
      },
      select: {
        membersChannel: {
          select: {
            id: true,
            Chats: {
              select: {
                id: true
              }
            }
          }
        }
      }
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
