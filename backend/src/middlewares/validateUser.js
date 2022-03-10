const USER_FOR_LOGIN = ["email", "password"];
const USER_FOR_SIGN_UP = ["name", "surname", "email", "password"];

module.exports = {
  validateUserForLogin: (req, res, next) => {
    const { data } = req.body;
    if (!data) {
      return res.status(400).send({
        message: "Data missing",
      });
    }
    for (let attribute of USER_FOR_LOGIN) {
      if (!data[attribute]) {
        return res.status(400).send({
          message: `${attribute.capitalizate()} missing`,
        });
      }
    }
    return next();
  },
  validateUserForSignUp: (req, res, next) => {
    const { data } = req.body;
    if (!data) {
      return res.status(400).send({
        message: "Data missing",
      });
    }
    for (let attribute of USER_FOR_SIGN_UP) {
      if (!data[attribute]) {
        return res.status(400).send({
          message: `${attribute.capitalizate()} missing`,
        });
      }
    }
    return next();
  },
};
