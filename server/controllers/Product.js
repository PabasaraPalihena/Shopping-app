const Product = require("../models/Product");

// //@desc Add product
// //@route POST /api/v1/product
// //@access Public
// exports.addProduct = async (req, res) => {
//   const { productID, productName, price, qty, productSize, sampleImages } =
//     req.body;
//   try {
//     const product = await Product.create({
//       productID,
//       productName,
//       price,
//       qty,
//       productSize,
//       sampleImages,
//     });
//     return res.status(201).json({
//       success: true,
//       data: product,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: "Server error",
//     });
//   }
// };

//@desc Add product
//@route POST /api/v1/product
//@access Public
exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

//@desc   Get all products
//@route  GET /api/v1/products
//@access Public
exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json({
      success: true,
      count: product.length,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc   Get single product details
//@route  GET /api/v1/product/:id
//@access Public
exports.getaProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: "This product not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        success: false,
        error: "product not found",
      });
    }
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc Update a product
//@route PUT /api/v1/product/:id
//@access private
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Could not find a product with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};

//@desc Delete a product
//@route DELETE /api/v1/product/:id
//@access private
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "Could not find a product with the given ID",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }

  //cart selection
};
