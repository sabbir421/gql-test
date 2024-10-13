const jwt = require("jsonwebtoken");
const { variables } = require("../config/variables");

const authenticate = async (req) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw {
        status: 401,
        message: "Unauthorized access",
      };
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      throw {
        status: 401,
        message: "Unauthorized access",
      };
    }
    const userData = jwt.verify(token, variables.jwtSecret);
    if (!userData.id) {
      throw {
        status: 401,
        message: "Unauthorized access",
      };
    }
    return userData || {};
  } catch (error) {
    console.error(error);
  }
};

module.exports = authenticate;
