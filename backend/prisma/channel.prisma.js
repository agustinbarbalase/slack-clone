const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient().Channel;

module.exports = {
  createChannel: (data) => {
    return prisma.create({
      data,
      select: {
        id: true,
        name: true,
        owner: {
          select: {
            email: true,
            name: true,
            surname: true
          }
        },
        members: {
          select: {
            email: true,
            name: true,
            surname: true
          }
        }
      },
    });
  },
  findAllChannels: () => {
    return prisma.findMany({
      select: {
        id: true,
        name: true,
        owner: {
          select: {
            email: true,
            name: true,
            surname: true
          }
        },
        members: {
          select: {
            email: true,
            name: true,
            surname: true
          }
        }
      },
    });
  },
  findChannelById: (id) => {
    return prisma.findUnique({
      where: {
        id,
      },
    });
  },
  addMemberToChannel: async (id, memberId) => {
    try {
      const channel = await prisma.findUnique({
        where: {
          id,
        },
      });
      if (channel) {
        const members = channel.members.push(memberId);
        return prisma.update({
          where: {
            id,
          },
          data: {
            members,
          },
        });
      }
    } catch (err) {
      return err;
    }
  },
  removeMemberToChannel: async (id, memberId) => {
    try {
      const channel = await prisma.findUnique({
        where: {
          id,
        },
      });
      if (channel) {
        const members = channel.members.filter((item) => item !== memberId);
        return prisma.update({
          where: {
            id,
          },
          data: {
            members,
          },
        });
      }
    } catch (err) {
      return err;
    }
  },
  removeOwner: async (id) => {
    try {
      const channel = await prisma.findUnique({
        where: {
          id,
        },
      });
      if (channel) {
        let members = channel.members.filter(
          (item) => item !== channel.members.ownerId
        );
        return prisma.update({
          where: {
            id,
          },
          data: {
            members,
            ownerId: members[0],
          },
        });
      }
    } catch (err) {
      return;
    }
  },
  deleteChannel: async (id) => {
    return prisma.delete({
      where: {
        id,
      },
    });
  },
};
