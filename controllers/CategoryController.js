const Category = require("../data/models/Category");
const ServiceResponce = require("../services/ServiceResponce");

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (categories) {
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

exports.updateCategory = async (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  const Name = req.body.name;
  const updatedCategory = {
    id,
    Name,
  };
  try {
    console.log("updatedCategory ", updatedCategory);
    const result = await Category.update(updatedCategory, {
      where: { id: id },
    });
    console.log("result -> ", result);
    if (!result) {
      res
        .status(400)
        .json(
          new ServiceResponce("Category not updated.", null, null, false, null)
        );
    } else {
      res
        .status(200)
        .json(
          new ServiceResponce(
            "Category successfully updated.",
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
