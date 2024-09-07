import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
      },
    //soft delete
    active: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

const  Category = model("Category", CategorySchema);

export default Category;