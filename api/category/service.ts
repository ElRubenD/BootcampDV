import { ICategory } from "./types";
import { categoryDao } from "./dao";
import { config } from "dotenv";

config();

const {
    getAllCategories,
    getCategoryById,
    createCategory,
    editCategory,
    deleteCategory,
} =  categoryDao;

class CategoryService {
    async getCategory(id: string) {
        try {
            const category = await getCategoryById(id);
            return category;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getCategories() {
        try {
            const categories = await getAllCategories();
            return categories;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createCategory(category: ICategory) {
        try {
            const newCategory = await createCategory(category);
            return newCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editCategory(id: string, category: ICategory) {
        try {
            const updatedCategory = await editCategory(id, category);
            return updatedCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteCategory(id: string) {
        try {
            const deletedCategory = await deleteCategory(id);
            return deletedCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const categoryService = new CategoryService();