module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);
# Random change 27170
