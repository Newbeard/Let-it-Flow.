const { validateAccessToken } = require('../service/token.service')

function auth(req, res, next) {
  try {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json("Вы не авторизованы");
  } 
    const decoded = validateAccessToken(token);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
}


module.exports = auth;