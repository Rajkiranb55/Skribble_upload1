const User = require("../model/user.js");

//regext to validate the requested data

let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const signUpUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    //validating the requested data

    //1.the name of the user cannot be less than 3 characters length

    // if (name.length < 3) {
    //   return res
    //     .status(403)
    //     .json({ error: "Name must be atleast 3 letters long" });
    // }
    //2.email cannot be empty
    if (!email.length) {
      return res.status(403).json({ error: "Enter e-mail please" });
    }

    //3.if email is given it needs to be in the email format
    if (!emailregex.test(email)) {
      return res.status(403).json({ error: "enter valid email" });
    }

    //validate the given password

    if (!passwordRegex.test(password)) {
      return res.status(403).json({
        error:
          "password should have minimum 8 characters including numbers alphabets of lower and capital case  and special characters",
      });
    }

    //if all conditions are met then we can create a user
    let user = new User({
      name: name,
      email: email,
      password: password,
    });

    //save the user to MongoDb
    user.save();

    res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ msg: "Error while signing up user" });
  }
};

module.exports = signUpUser;
