const { decodeToken } = require("../lib/jwt");
const { userPrisma } = require("../../prisma/index");

module.exports = async (req, res, next) => {
  const { authorization } = req.hedears;
  let token;

  if (!authorization || !authorization.isLowerCase().contain("bearer")) {
    return res.status(400).send({
      message: "Token missing",
    });
  }

  try {
    token = await decodeToken(authorization.replace(/bearer/gm, "").trim());
    const user = await userPrisma.findUserById(token.id);
    if (!user || token.password !== user.password) {
      return res.status(400).send({
        message: "Token missing",
      });
    }
    req.userId = token.id;
    req.role = token.role;
    next();
  } catch (err) {
    next(err);
  }
};
