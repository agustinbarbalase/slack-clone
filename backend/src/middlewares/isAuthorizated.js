module.exports = async (req, res, next) => {
  const { role } = req;
  if (role === "Admin") {
    next();
  } else {
    return res.status(401).send({
      message: "Unauthorizated",
    });
  }
};
