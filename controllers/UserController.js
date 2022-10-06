const User = require("../data/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Constants = require("../data/config/constants");
const ServiceResponce = require("../services/ServiceResponce");

exports.loginUser = async (req, res, next) => {
  console.log("req.body ", req.body.email);
  try {
    const user = await User.findOne({ where: { Email: req.body.email } });
    if (user && bcrypt.compareSync(req.body.password, user.Password)) {
      const { id, Name, Surname, Email, Role } = user;

      const token = jwt.sign(
        { id, Name, Surname, Email, Role },
        Constants.Secret
      );
      res
        .status(200)
        .json(
          new ServiceResponce("Logged in successfully.", token, null, true)
        );
    } else {
      res
        .status(404)
        .json(
          new ServiceResponce("Login or password incorrect", null, null, false)
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false));
  }
};
