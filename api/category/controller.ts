import { Request, Response } from "express";
import { categoryService } from "./service";
import Category from "./model";

const { getCategory, getCategories, createCategory, deleteCategory, editCategory } = categoryService;

class CategoryController {
    async getCategories(req: Request, res: Response){
        try {
            const categories = await getCategories();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(400).json({ error: "Users not found" });
        }
    }
    async getCategory(req: Request, res: Response){
        const id = req.params.id;
        try {
            const category = await getCategory(id);
            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json({ error: "Category not found" });
        }
    }
    async createCategory(req: Request, res: Response){
        try {
            const category = await createCategory(req.body);
            return res.status(201).json(category);
        } catch (error) {
            return res.status(500).json({ error: (error as Error).message });
        }
    }
    async deleteCategory(req: Request, res: Response){
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json({ error: "Category not found" });
        }
    }
    async editCategory(req: Request, res: Response){
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, { 
                new: true
             });
            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json({ error: "Category not found" });
        }
    }
}

export const categoryController = new CategoryController();