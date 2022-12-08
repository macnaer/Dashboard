const User = require("../data/models/User");
const Category = require("../data/models/Category");
const bcrypt = require("bcrypt");
const Post = require("../data/models/Post");
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
  let sportPost = await Post.findOne({ where: { Title: "FIFA" } });
  console.log("sportPost ", sportPost);
  if (!sportPost) {
    await new Post({
      Title: "FIFA",
      ShortDescription:
        "Spain’s shock loss to Morocco and elimination from the men’s World Cup has triggered changes for the country’s national football team, with coach Luis Enrique replaced by Luis de la Fuente.",
      Description:
        "Spain’s shock loss to Morocco and elimination from the men’s World Cup has triggered changes for the country’s national football team, with coach Luis Enrique replaced by Luis de la Fuente. The Spanish football federation on Thursday thanked Enrique but said it was time to “start a new project” following Tuesday’s defeat. The change was made after a recommendation from Spain’s sporting officials.",
      Image:
        "https://www.aljazeera.com/wp-content/uploads/2022/11/SOR09504.jpg?resize=770%2C513",
      Category: "Sport",
    }).save();
  }
};
Seed();
