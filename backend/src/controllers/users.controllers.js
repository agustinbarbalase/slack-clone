const { userPrisma } = require("../../prisma/index");

module.exports = {
  getAllUsers: async(req, res, next) => {
    try {
      const foundUsers = await userPrisma.findAllUsers();
      res.status(200).send(foundUsers);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  getUser: async (req, res, next) => {
    const { id } = req.params;

    try {
      const foundUser = await userPrisma.findUserById(id);
      res.status(200).send(foundUser);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  postUser: async (req, res, next) => {
    const { data } = req.body;

    try {
      const createUser = await userPrisma.createUser(data);
      res.status(201).send(createUser);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  editUser: async (req, res, next) => {
    const { id } = req.params;
    const { data } = req.body;

    try {
      const editedUser = await userPrisma.editUser(id, data);
      res.status(200).send(editedUser);
    } catch(err) {
      next(new Error(err.name));
    }
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.params;

    try {
      const deletedUser = await userPrisma.deleteUser(id);
      res.status(200).send(deletedUser);
    } catch(err) {
      next(new Error(err.name));
    }
  }
}