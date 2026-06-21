import { Router } from "express";
import {CreateUserController} from "./controllers/user/CreateUserController"
import { validateShema } from "./middlewares/validateSchema";
import { authUserSchema, createUserSchema } from "./schemas/userSchema";
import {AuthUserController} from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router()

router.post("/users", validateShema(createUserSchema), new CreateUserController().handle)
    
router.post("/session",validateShema(authUserSchema), new AuthUserController().handle)

router.get("/me", new DetailUserController().handle)

export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE