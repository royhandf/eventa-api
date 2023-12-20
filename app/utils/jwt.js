const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpiration } = require("../config");

const createJWT = ({ paylod }) => {
  const token = jwt.sign(paylod, jwtSecret, { expiresIn: jwtExpiration });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret);

module.exports = {
  createJWT,
  isTokenValid,
};
