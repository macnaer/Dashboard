const User = require("../data/models/User");
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

const Seed = async () => {
  let admin = await User.findOne({ where: { Email: "admin@email.com" } });
  if (!admin) {
    await new User({
      Name: "John",
      Surname: "Snow",
      Email: "john@email.com",
      Role: "Administrator",
      Password: bcrypt.hashSync("Qwerty-1", salt),
    }).save();
  }
};
Seed();
