const { userPrisma } = require("../../prisma/index");

module.exports = {
  getUser: async (req, res, next) => {
    const { id } = req.params;

    try {
      const foundUser = await userPrisma.findUserById(id);
      res.status(200).send(foundUser);
    } catch(err) {
      next(err);
    }
  },
  postUser: async (req, res, next) => {
    const { data } = req.body;

    try {
      const createUser = await userPrisma.createUser(data);
      res.status(201).send(createUser);
    } catch(err) {
      next(err);
    }
  },
  editUser: async (req, res, next) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const editedUser = await userPrisma.editUser(id, data);
      res.status(200).send(editedUser);
    } catch(err) {
      next(err);
    }
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.params;

    try {
      const deletedUser = await userPrisma.deleteUser(id);
      res.status(200).send(deletedUser);
    } catch(err) {
      next(err);
    }
  }
}