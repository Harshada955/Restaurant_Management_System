import mongoose from 'mongoose';
import shortid from "shortid";

const menuSchema = new mongoose.Schema({
    menuId: {
        type: String,
        default: shortid.generate,
        unique: true
    },
    category: {
        type: String,
        required: true,
        minLength: [3, "Category must contain at least 3 characters!"],
        maxLength: [30, "Category cannot exceed 30 characters!"],
    },
    subCategory: {
        type: String,
        required: false,
        maxLength: [30, "Sub Category cannot exceed 30 characters!"],
    },
    type: {
        type: String,
        required: true,
        minLength: [3, "Type must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    item: {
        type: String,
        required: true,
        minLength: [3, "Item must contain at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    halfPrice: {
        type: Number,
        required: false,
    },
    fullPrice: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    }
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
