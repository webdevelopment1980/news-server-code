const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String },
    subcategory: [{ type: String }],
    status: {
        type: String,
        enum: ["active", "disable"]
    }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;