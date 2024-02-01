const jwt = require("jsonwebtoken");
const User = require("../model/user.js");

const auth = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    // console.log(token);
    const decoded = jwt.verify(
      token,
      "rkb2345fgvvwlopandkdrtrtrffdssdfsfwdvbg"
    );
    const user = await User.findOne({ _id: decoded.userId });
    console.log(user);
    if (!user) {
      console.log("user not found");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Authentication required" });
  }
};

module.exports = auth;
