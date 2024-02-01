const jwt = require("jsonwebtoken");

const User = require("../model/user.js");

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    let userlogin = await User.findOne({ email });

    if (!userlogin) {
      // console.log("user is not valid");
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passCompare = password === userlogin.password;

    if (!passCompare) {
      // console.log("password mismatch");
      return res.status(401).json({ error: "Authentication failed" });
    }

    const token = jwt.sign(
      { userId: userlogin._id },
      "rkb2345fgvvwlopandkdrtrtrffdssdfsfwdvbg"
    );
    res.json({ success: true, token, userName: userlogin.name });
  } catch (error) {
    res.status(500).json({ msg: "error while login the user" });
  }
};

module.exports = userLogin;
