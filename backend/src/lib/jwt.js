const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "slack-clone-secret";

module.exports = {
  generateToken: (data) => {
    return jwt.sign(data, SECRET, {
      expiresIn: "1h",
    });
  },
  decodeToken: (token) => {
    return jwt.verify(token, SECRET);
  },
};
