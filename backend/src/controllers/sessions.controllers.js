const { generateToken } = require("../lib/jwt");
const { userPrisma } = require("../../prisma/index");
const { comparePassword, generatePassword } = require("../lib/bcrypt");

module.exports = {
  login: async (req, res, next) => {
    const { data } = req.body;

    try {
      const user = await userPrisma.findUserByEmail(data.email);
      if (!user) {
        return res.status(400).send({
          message: "Email or password incorrect",
        });
      }
      const passwordHashed = await comparePassword(
        data.password,
        user.password
      );
      if (!passwordHashed) {
        return res.status(400).send({
          message: "Email or password incorrect",
        });
      }
      const token = await generateToken(user);
      res.status(200).send({ token });
    } catch (err) {
      next(new Error(err.name));
    }
  },
  signUp: async (req, res, next) => {
    const { data } = req.body;

    try {
      const passwordHashed = await generatePassword(data.password);
      const createdUser = await userPrisma.createUser({
        ...data,
        password: passwordHashed,
      });
      const token = await generateToken(createdUser);
      res.status(201).send({ token });
    } catch (err) {
      next(new Error(err.name));
    }
  },
};
