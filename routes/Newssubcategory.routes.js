// routes/subcategoryRoutes.js
const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/SubCategory");

router.get("/get", subcategoryController.getAllSubcategories);
router.post("/", subcategoryController.createSubcategory);

module.exports = router;