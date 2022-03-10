const LIST_OF_ERRORS = {
  P2002: (res, error) => {
    res.status(400).send({
      message: `${error.meta.target[0].capitalizate()} has been register`,
    });
  },
  JsonWebTokenError: (res, error) => {
    res.status(400).send({
      message: "Token missing or invalid",
    });
  },
  TokenExpiredError: (res, error) => {
    res.status(400).send({
      message: "Token missing or invalid",
    });
  },
  Unauthenticated: (res, error) => {
    res.status(400).send({
      message: "Token missing or invalid",
    });
  },
  Unauthorizated: (res, error) => {
    res.status(401).send({
      message: "Unauthorizated",
    });
  },
  defaultError: (res, error) => {
    console.log(error.name, error.code);
    res.status(500).end();
  },
};

module.exports = (error, req, res, next) => {
  const handler = LIST_OF_ERRORS[error.message] || LIST_OF_ERRORS.defaultError;
  handler(res, error);
};
