const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || "secretkey";

function generateToken(user) {
    return jwt.sign({ id: user._id, email: user.email }, SECRET, { expiresIn: "1d" });
}

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid token" });
        req.user = decoded;
        next();
    });
}

module.exports = { generateToken, verifyToken };