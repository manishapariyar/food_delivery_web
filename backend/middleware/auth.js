const authMiddle = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Access denied. No token provided. Not authorized user",
    });
  }
  const token = authorizationHeader.split(" ")[1];
  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body) req.body = {}; // Check if req.body is an object
    req.body.userId = token_decoded.id;
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.status(401).json({ message: "Invalid token." });
  }
};

export default authMiddle;