const jwt = require("jsonwebtoken");
const { varivales } = require("../config/variables");


const authenticate = async (req) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Unauthorized access: No authorization header provided");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new Error("Unauthorized access: Token not provided");
    }

    const userData = jwt.verify(token, varivales.jwtSecret);
    if (!userData || !userData.id) {
      throw new Error("Unauthorized access: Invalid token or user ID missing");
    }

    return userData; 
  } catch (error) {
    console.error("Authentication error:", error.message);
    throw new Error(error.message || "Unauthorized access");
  }
};

module.exports = authenticate;
