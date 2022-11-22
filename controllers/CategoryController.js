const Category = require("../data/models/Category");
const ServiceResponce = require("../services/ServiceResponce");

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (categories) {
      console.log("Inside => ", categories);
      res
        .status(200)
        .json(
          new ServiceResponce(
            "All categories successfully loaded.",
            null,
            null,
            true,
            categories
          )
        );
    } else {
      res
        .status(404)
        .json(
          new ServiceResponce("Categories not found.", null, null, false, null)
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(new ServiceResponce("Server error.", null, error, false, null));
  }
};
