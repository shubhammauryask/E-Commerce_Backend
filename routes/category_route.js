const CategoryRoute = require('express').Router();
const CategoryController = require("../controllers/category_controller");

CategoryRoute.post("/createCategory",CategoryController.createCategory);
CategoryRoute.get("/:id",CategoryController.fetchCategoriesById);
CategoryRoute.get("/",CategoryController.fetchAllCategories);

module.exports = CategoryRoute;
