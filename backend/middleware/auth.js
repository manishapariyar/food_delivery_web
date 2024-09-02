import jwt from "jsonwebtoken";

const authMiddle = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided. Not authorized user",
    });
  }
  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(token_decoded.id);
    req.body.userId = token_decoded.id;
    // req.user = token_decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
};

export default authMiddle;
