const jwt = require('jsonwebtoken');

const verifyUser = async (req,res,next) => {
    const headers = req.headers.authorization;
    const token = headers?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Provide bearer token" });
    }
    try {
        const isVerified = await jwt.verify(token,process.env.SECRET_KEY);
        if(isVerified)
        {
            req.userId = isVerified.id;
            req.email = isVerified.email;
            req.name = isVerified.name;
            next();
        }
        else {
            return res.status(401).json({ error: "Invalid Token" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Token verification failed" });
    }

}

module.exports = {verifyUser};