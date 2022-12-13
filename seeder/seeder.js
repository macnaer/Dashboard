const User = require("../data/models/User");
const Category = require("../data/models/Category");
const bcrypt = require("bcrypt");
const Post = require("../data/models/Post");
let salt = bcrypt.genSaltSync(10);

const users = [
  {
    Name: "Admin",
    Surname: "Snow",
    Email: "admin@email.com",
    Role: "Administrator",
    Password: bcrypt.hashSync("Qwerty-1", salt),
  },
  {
    Name: "Tomas",
    Surname: "Andersen",
    Email: "user@email.com",
    Role: "User",
    Password: bcrypt.hashSync("Qwerty-1", salt),
  },
  {
    Name: "Tomas2",
    Surname: "Andersen2",
    Email: "user2@email.com",
    Role: "User",
    Password: bcrypt.hashSync("Qwerty-1", salt),
  },
  {
    Name: "Tomas3",
    Surname: "Andersen3",
    Email: "user3@email.com",
    Role: "User",
    Password: bcrypt.hashSync("Qwerty-1", salt),
  },
  {
    Name: "Tomas4",
    Surname: "Andersen4",
    Email: "user4@email.com",
    Role: "User",
    Password: bcrypt.hashSync("Qwerty-1", salt),
  },
];

const category = [
  {
    Name: "Sport",
  },
  {
    Name: "Rest",
  },
  {
    Name: "Work",
  },
];

const articles = [
  {
    Title: "Volleyball",
    Image:
      "https://www.reuters.com/resizer/gdfHAQ_fliyjSXUfUao6X_XVbXc=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AYGN62PUMJJCXP53ZLYXI6VLDQ.jpg",
    ShortDescription: "Game",
    Description: "Game Volleyball",
    CategoryId: 1,
  },
  {
    Title: "Rest for you",
    Image:
      "https://www.betterup.com/hubfs/Blog%20Images/types-of-rest-blog-1.jpg",
    ShortDescription: "Why is sleeping not enough?",
    Description:
      "Most of the time, when we feel drained, we try to compensate by getting more sleep. And that makes sense — after all, most of us aren’t getting anywhere near the recommended seven to nine hours of sleep per night. But what do you do when you still feel exhausted even when you get more sleep?",
    CategoryId: 2,
  },
  {
    Title: "Work and time",
    Image:
      "https://techcrunch.com/wp-content/uploads/2016/12/gettyimages-4959319721.jpg?w=990&crop=1",
    ShortDescription: "How to Work Effectively?",
    Description:
      "Trim your task list. We all know how paralyzing it can be to start a big project or tackle a crazy to-do list. So don’t overwhelm yourself with a massive task list!",
    CategoryId: 3,
  },
];

const Seed = async () => {
  for (const userData of users) {
    const user = await User.findOne({ where: { Email: userData.Email } });
    if (user) {
      await user.update(userData);
    } else {
      await new User(userData).save();
    }
  }

  for (const categoryData of category) {
    const category = await Category.findOne({
      where: { Name: categoryData.Name },
    });
    if (category) {
      await category.update(categoryData);
    } else {
      await new Category(categoryData).save();
    }
  }

  for (const articleData of articles) {
    const article = await Post.findOne({
      where: { Title: articleData.Title },
    });
    if (article) {
      await article.update(articleData);
    } else {
      await new Post(articleData).save();
    }
  }
};

Seed();
