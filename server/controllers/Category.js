const Category = require("../models/Category");

//@desc Add category
//@route POST /api/v1/category
//@access Public
exports.addCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await Category.create({
      categoryName,
    });
    return res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

//@desc   Get all categories
//@route  GET /api/v1/category
//@access Public
exports.getCategories = async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json({
      success: true,
      count: category.length,
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc   Get single category details
//@route  GET /api/v1/category/:id
//@access Public
exports.getaCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        success: false,
        error: "This category not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "Category not found",
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Update a category
//@route PUT /api/v1/category/:id
//@access private
exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        msg: "Could not find a category with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

//@desc Delete a category
//@route DELETE /api/v1/category/:id
//@access private
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        msg: "Could not find a category with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};
