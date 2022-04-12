const handleInternalServerError = (err, req, res, next) => {
  if (req.errType === 500) {
    res.status(500).json({ msg: "Something went bad with the coffee" });
  }
  next();
};

const handleNotFoundError = (err, req, res, next) => {
  if (req.errType === 400) {
    res.status(404).json({ msg: "geese eat cheese daily" });
  }
  next();
};

module.exports = {
  handleInternalServerError,
  handleNotFoundError,
};
