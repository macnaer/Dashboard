const Post = require("../data/models/Post");
const ServiceResponce = require("../services/ServiceResponce");

exports.createPost = async (req, res, next) => {
  console.log("createPost ", req.body);
  //   const id = req.body.id;
  //   const Name = req.body.name;
  //   const updatedCategory = {
  //     id,
  //     Name,
  //   };
  //   try {
  //     console.log("updatedCategory ", updatedCategory);
  //     const result = await Category.update(updatedCategory, {
  //       where: { id: id },
  //     });
  //     console.log("result -> ", result);
  //     if (!result) {
  //       res
  //         .status(400)
  //         .json(
  //           new ServiceResponce("Category not updated.", null, null, false, null)
  //         );
  //     } else {
  //       res
  //         .status(200)
  //         .json(
  //           new ServiceResponce(
  //             "Category successfully updated.",
  //             null,
  //             null,
  //             true,
  //             null
  //           )
  //         );
  //     }
  //   } catch (error) {
  //     res
  //       .status(500)
  //       .json(new ServiceResponce("Server error.", null, error, false, null));
  //   }
};
