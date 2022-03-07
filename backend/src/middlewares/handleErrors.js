const LIST_OF_ERRORS = {
  defaultError: (res, error) => {
    console.error(error);
    res.status(500).end();
  }
};

module.exports = (error, req, res, next) => {
  const handler = LIST_OF_ERRORS[error.name] || LIST_OF_ERRORS.defaultError;
  handler(res, error);
}