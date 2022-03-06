const bcrypt = require("bcrypt");
const SALT = process.env.BCRYPT_SALT || 10;

module.exports = {
  generatePassword: (password) => {
    return bcrypt.hash(password, SALT);
  },
  comparePassword: (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
  },
};
