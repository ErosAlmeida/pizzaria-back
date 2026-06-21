import { Request, Response } from "express";
import { ListaCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(res: Response, req: Request){
        const listCategory = new ListaCategoryService()
        const categories = await listCategory.executa()

        res.status(200).json(categories)
    }
}

export {ListCategoryController}