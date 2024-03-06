// controllers/subcategoryController.js
const Subcategory = require("../models/Newssubcategory.model");

exports.getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.json({ subcategories });
    } catch (err) {
        res.status(500).json({ error: "Unable to fetch subcategories" });
    }
};

exports.createSubcategory = async (req, res) => {
    const { name } = req.body;

    try {
        const subcategory = new Subcategory({ name });
        await subcategory.save();
        res.json({ subcategory });
    } catch (err) {
        res.status(400).json({ error: "Unable to create subcategory" });
    }
};