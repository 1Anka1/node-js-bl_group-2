module.exports = (err, req, res, next) => {
  let statusCode = res.statusCode || 500;
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  return res.status(statusCode).json({
    code: statusCode,
    err: stack,
  });
};
