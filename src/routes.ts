import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer"
import {CreateUserController} from "./controllers/user/CreateUserController"
import { validateShema } from "./middlewares/validateSchema";
import { authUserSchema, createUserSchema } from "./schemas/userSchema";
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { isAdmin } from "./middlewares/isAdmin";
import { createCategorySchema } from "./schemas/categorySchema";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { createProductSchema, listProductByCategoryShema, listProductSchema } from "./schemas/productSchema";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";


const router = Router()
const upload = multer(uploadConfig)

router.post("/users", validateShema(createUserSchema), new CreateUserController().handle)
    
router.post("/session",validateShema(authUserSchema), new AuthUserController().handle)

router.get("/me",isAuthenticated ,new DetailUserController().handle)

router.post("/category",isAuthenticated,isAdmin , validateShema(createCategorySchema),
new CreateCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

router.post("/product", isAuthenticated, isAdmin,upload.single('file'),
validateShema(createProductSchema), new CreateProductController().handle)

router.get("/products", isAuthenticated, validateShema(listProductSchema), new ListProductController().handle)

router.delete("/product", isAuthenticated, isAdmin, new DeleteProductController().handle)

router.get("/category/product", isAuthenticated, validateShema(listProductByCategoryShema), new 
ListProductByCategoryController().handle)
export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE