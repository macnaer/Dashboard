const User = require("../data/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Constants = require("../data/config/constants");
const ServiceResponce = require("../services/ServiceResponce");

var salt = bcrypt.genSaltSync(10);

const generateAccessToken = (id, Name, Surname, Email, Role) => {
  const token = jwt.sign({ id, Name, Surname, Email, Role }, Constants.Secret);
  return token;
};

exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { Email: req.body.email } });
    if (user && bcrypt.compareSync(req.body.password, user.Password)) {
      const { id, Name, Surname, Email, Role } = user;

      const token = generateAccessToken(id, Name, Surname, Email, Role);

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

exports.updateProfile = async (req, res, next) => {
  const userId = req.body.id;
  const updatedUser = {
    Name: req.body.name,
    Surname: req.body.surname,
    Email: req.body.email,
  };

  try {
    const result = await User.update(updatedUser, { where: { id: userId } });
    if (!result) {
      res
        .status(400)
        .json(
          new ServiceResponce("Profile not updated.", null, null, false, null)
        );
    } else {
      const user = await User.findOne({ where: { id: userId } });
      const { id, Name, Surname, Email, Role } = user;

      const token = generateAccessToken(id, Name, Surname, Email, Role);
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Profile successfully updated.",
            token,
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

exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.body.id } });
    if (!user) {
      return res
        .status(404)
        .json(
          new ServiceResponce("User not updated.", null, null, false, null)
        );
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
      return res
        .status(404)
        .json(
          new ServiceResponce("Passwords must match.", null, null, false, null)
        );
    }

    if (!bcrypt.compareSync(req.body.oldPassword, user.Password)) {
      return res
        .status(404)
        .json(
          new ServiceResponce("Invalid password.", null, null, false, null)
        );
    }

    await User.update(
      { ...User, Password: bcrypt.hashSync(req.body.newPassword, salt) },
      { where: { id: req.body.id } }
    );
    return res
      .status(200)
      .json(
        new ServiceResponce(
          "Passwords successfilly updated.",
          null,
          null,
          true,
          null
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.body.id;
  const updatedUser = {
    Name: req.body.name,
    Surname: req.body.surname,
    Email: req.body.email,
    Role: req.body.role,
  };

  try {
    const result = await User.update(updatedUser, { where: { id: userId } });
    if (!result) {
      res
        .status(400)
        .json(
          new ServiceResponce("Profile not updated.", null, null, false, null)
        );
    } else {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "User successfully updated.",
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

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.body.id },
      attributes: {
        exclude: ["Password"],
      },
    });
    if (user) {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "User successfully loaded.",
            null,
            null,
            true,
            user
          )
        );
    } else {
      res
        .status(404)
        .json(new ServiceResponce("User not found", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.getUserByEmail = async (req, res, next) => {
  console.log("getUserByEmail ", req.body);
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      attributes: {
        exclude: ["Password"],
      },
    });
    if (user) {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "User successfully loaded.",
            null,
            null,
            true,
            user
          )
        );
    } else {
      res
        .status(404)
        .json(new ServiceResponce("User not found", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.deleteUserById = async (req, res, next) => {
  console.log("deleteCategory ", req.body);
  const { id } = req.body;
  try {
    const user = await User.findOne({ where: { id: req.body.id } });
    if (user) {
      const deletedUser = await User.destroy({
        where: { id: req.body.id },
      });
      res
        .status(200)
        .json(
          new ServiceResponce(
            "User successfully deleted.",
            null,
            null,
            true,
            null
          )
        );
    } else {
      res
        .status(200)
        .json(new ServiceResponce("User not found.", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};
