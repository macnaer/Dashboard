const Post = require("../data/models/Post");
const ServiceResponce = require("../services/ServiceResponce");

exports.createPost = async (req, res, next) => {
  console.log("createPost ", req.body);
  try {
    const post = await User.findOne({ where: { Title: req.body.Title } });
    if (!post) {
      await new Post({
        Title: req.body.Title,
        ShortDescription: req.body.ShortDescription,
        Description: req.body.Description,
        CategoryId: req.body.CategoryId,
        Image: req.body.Image,
      }).save();
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Post successfully updated.",
            null,
            null,
            true,
            null
          )
        );
    } else {
      res
        .status(200)
        .json(
          new ServiceResponce(
            `Post with title ${req.body.Title} exists.`,
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
