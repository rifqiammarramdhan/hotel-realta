const categoryRoute = require("express").Router();
const {
  getCategory,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
  showImg,
} = require("../../controller/master/categoryController");

categoryRoute.get("/", getCategory);
categoryRoute.delete("/delete/:cagro_id", deleteCategory);
categoryRoute.put("/update/:cagro_id", updateCategory);
categoryRoute.get("/details/:cagro_id", getDetailCategory);
categoryRoute.get("/details/:img", showImg);

module.exports = categoryRoute;
