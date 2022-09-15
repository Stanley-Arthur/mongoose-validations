const jwt = require("jsonwebtoken")

exports.authRequired = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(402).json({error:"please login"})
    }

    //const token = authorization.split("Bearer")[0]

    const token = authorization.split("")[1]
    if(!token){
        return res.status(402).json({error:"please login"})
    }

    const user = jwt.verify(
      token,
      "fdba2096dcb571714353f2a62ceba6d4b7c5db1a51586bdc5d882961d1574765"
    );
    req.user = user;

    next();
}