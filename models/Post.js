const mongoose = require("mongoose");

const Postschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        // required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    subcategory: {
        type: Array,
        required: true,
    }, status: {
        type: String,
    }, seotitle: {
        type: String,
    }, seodescription: {
        type: String,
    }, engtitle: {
        type: String
    }
}, { timestamps: true }
)

module.exports = mongoose.model("Post", Postschema);