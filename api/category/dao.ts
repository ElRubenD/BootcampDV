import Category from "./model"
import { ICategory } from "./types"

class CategoryDao {
    async getAllCategories() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getCategoryById(userId: string) {
        try {
            const category = await Category.findById(userId);
            return category;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createCategory(user: ICategory) {
        try {
            const newCategory = await Category.create(user);
            return newCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editCategory(categoryId: string, category: ICategory) {
        try {
            const editCategory = await Category.findByIdAndUpdate(categoryId, category, {
                new: true,
            });
            return editCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteCategory(categoryId: string) {
        try {
            const deleteCategory = await Category.findByIdAndDelete(categoryId);
            return deleteCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const categoryDao = new CategoryDao();