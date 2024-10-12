const jwt = require("jsonwebtoken");
const { varivales } = require("../config/variables");
exports.genarateToken = async (req, res) => {
  try {
    console.log(varivales.jwtSecret);
    const user = { id: "1234" };
    const token = jwt.sign(user, varivales.jwtSecret, { expiresIn: "24h" });
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};
