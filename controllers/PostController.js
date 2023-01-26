const Post = require("../data/models/Post");
const ServiceResponce = require("../services/ServiceResponce");

const path = require("path");
const fs = require("fs");

function decode_base64(base64str) {
  const filename = new Date().toISOString() + ".png";
  const imgPath = path.join(__dirname, "..", "/uploads/", filename);

  console.log(imgPath);

  // Errors
  // let buff = new Buffer(base64str, "base64");
  // fs.writeFileSync(imgPath, buff);
  return filename;
}

exports.createPost = async (req, res, next) => {
  // console.log(
  //   "==============================================> ",
  //   req.body.Image
  // );
  const file = decode_base64(req.body.Image);
  try {
    const post = await Post.findOne({ where: { Title: req.body.Title } });
    if (!post) {
      await new Post({
        Title: req.body.Title,
        ShortDescription: req.body.ShortDescription,
        Description: req.body.Description,
        CategoryId: req.body.CategoryId,
        Image: file,
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

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    if (posts) {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "All posts successfully loaded.",
            null,
            null,
            true,
            posts
          )
        );
    } else {
      res
        .status(404)
        .json(new ServiceResponce("Posts not found.", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.getPostById = async (req, res, next) => {
  const { id } = req.body;
  try {
    const post = await Post.findOne({
      where: { id: id },
    });
    if (post) {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Post successfully loaded.",
            null,
            null,
            true,
            post
          )
        );
    } else {
      res
        .status(200)
        .json(new ServiceResponce("Post not found.", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.deletePost = async (req, res, next) => {
  const { id } = req.body;
  try {
    const post = await Post.findOne({ where: { id: id } });
    if (post) {
      await Post.destroy({
        where: { id: id },
      });
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Post successfully deleted.",
            null,
            null,
            true,
            null
          )
        );
    } else {
      res
        .status(200)
        .json(new ServiceResponce("Post not found.", null, null, false, null));
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updatedPost = {
      id: req.body.id,
      Title: req.body.Title,
      ShortDescription: req.body.ShortDescription,
      Description: req.body.Description,
      CategoryId: req.body.CategoryId,
      Image: req.body.Image,
    };
    const result = await Post.update(updatedPost, {
      where: { id: req.body.id },
    });

    if (!result) {
      res
        .status(200)
        .json(new ServiceResponce("Post not updated.", null, null, true, null));
    } else {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Post successfully updated.",
            null,
            null,
            true,
            updatedPost
          )
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};
