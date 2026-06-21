import { Router } from "express";
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


const router = Router()

router.post("/users", validateShema(createUserSchema), new CreateUserController().handle)
    
router.post("/session",validateShema(authUserSchema), new AuthUserController().handle)

router.get("/me",isAuthenticated ,new DetailUserController().handle)

router.post("/category",isAuthenticated,isAdmin , validateShema(createCategorySchema),
new CreateCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE