const { decodeToken } = require("../lib/jwt");
const { userPrisma } = require("../../prisma/index");

module.exports = async (req, res, next) => {
  return console.log(req.url)
  const { authorization } = req.headers;
  let token;

  
  if (!authorization || !authorization.toLowerCase().includes("bearer")) {
    return next(new Error("Unauthenticated"));
  }

  try {
    token = await decodeToken(authorization.replace(/bearer/im, "").trim());
    const user = await userPrisma.findUserById(token.id);
    if (!user || token.password !== user.password) {
      return next(new Error("Unauthenticated"));
    }
    req.userId = token.id;
    req.role = token.role;
    next();
  } catch (err) {
    next(new Error(err.name));
  }
};
