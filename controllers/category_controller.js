const CategoryModel = require("../models/category_model");

const CategoryController = {

  createCategory: async function (req, res) {
    try {
      const categoryData = req.body;
      const newCategory = new CategoryModel(categoryData);
      await newCategory.save();

      return res.json({
        success: true,
        data: newCategory,
        message: "Category created!",
      });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },

  fetchAllCategories: async function (req, res) {
    try {
      const category = await CategoryModel.find();

      return res.json({ success: true, data: category });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },

  fetchCategoriesById: async function (req, res) {
    try {
      const id = req.params.id;
      const foundcategory = await CategoryModel.findById(id);
           if(!foundcategory){
            return res.json({ success: false, message:"Category not found"});
           }
      return res.json({ success: true, data: foundcategory });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
};

module.exports = CategoryController;
