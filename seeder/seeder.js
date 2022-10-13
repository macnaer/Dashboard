const User = require("../data/models/User");
const bcrypt = require("bcrypt");
let salt = bcrypt.genSaltSync(10);

const Seed = async () => {
  let admin = await User.findOne({ where: { Email: "admin@email.com" } });
  let user = await User.findOne({ where: { Email: "user@email.com" } });
  if (!admin) {
    await new User({
      Name: "John",
      Surname: "Snow",
      Email: "john@email.com",
      Role: "Administrator",
      Password: bcrypt.hashSync("Qwerty-1", salt),
    }).save();
  }

  if (!user) {
    await new User({
      Name: "Tomas",
      Surname: "Andersen",
      Email: "rom@email.com",
      Role: "User",
      Password: bcrypt.hashSync("Qwerty-1", salt),
    }).save();
  }
};
Seed();
