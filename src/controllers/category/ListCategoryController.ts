import { Request, Response } from "express";
import { ListaCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategory = new ListaCategoryService();

    const categories = await listCategory.executa();

    return res.status(200).json(categories);
  }
}

export { ListCategoryController };