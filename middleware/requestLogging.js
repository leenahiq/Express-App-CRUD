const setRequestLog = (req, res, next) => {
  req.dateTime = new Date();
  next();
};

const logRequestLog = (req, res, next) => {
  console.log(`${req.dateTime}:${req.path}`);
};
module.exports = { setRequestLog, logRequestLog };
