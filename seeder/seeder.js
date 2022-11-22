const User = require("../data/models/User");
const Category = require("../data/models/Category");
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
      Email: "tom@email.com",
      Role: "User",
      Password: bcrypt.hashSync("Qwerty-1", salt),
    }).save();
  }

  let sport = await Category.findOne({ where: { Name: "Sport" } });
  if (!sport) {
    await new Category({
      Name: "Sport",
    }).save();
  }

  let rest = await Category.findOne({ where: { Name: "Rest" } });
  if (!rest) {
    await new Category({
      Name: "Rest",
    }).save();
  }

  let work = await Category.findOne({ where: { Name: "Work" } });
  if (!work) {
    await new Category({
      Name: "Work",
    }).save();
  }
};
Seed();
