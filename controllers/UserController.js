const User = require("../data/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Constants = require("../data/config/constants");
const ServiceResponce = require("../services/ServiceResponce");

var salt = bcrypt.genSaltSync(10);

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
          new ServiceResponce(
            "Logged in successfully.",
            token,
            null,
            true,
            null
          )
        );
    } else {
      res
        .status(404)
        .json(
          new ServiceResponce(
            "Login or password incorrect",
            null,
            null,
            false,
            null
          )
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.register = async (req, res, next) => {
  const { Name, Surname, Email, Password, Role } = req.body;
  try {
    const user = await User.findOne({ where: { Email } });
    if (user) {
      res
        .status(400)
        .json(
          new ServiceResponce("User alredy exists", null, null, false, null)
        );
    } else {
      const newUser = new User({
        Name,
        Surname,
        Email,
        Password: bcrypt.hashSync(Password, salt),
        Role,
      });
      await newUser.save();
      res
        .status(200)
        .json(
          new ServiceResponce(
            "User successfully created.",
            null,
            null,
            true,
            null
          )
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["Password"],
      },
    });
    res
      .status(200)
      .json(new ServiceResponce("All users loaded.", null, null, true, users));
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};
