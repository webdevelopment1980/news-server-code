// routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/Category");

router.get("/get", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.delete("/delete", categoryController.deleteCategory)
// router.put("/:id", categoryController.getCategoryandUpdate)
router.put("/add/:id", categoryController.getCategoryandUpdate)

module.exports = router;