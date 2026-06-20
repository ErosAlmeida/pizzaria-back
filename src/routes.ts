import { Router } from "express";
import {CreateUserController} from "./controllers/user/CreateUserController"
import { validateShema } from "./middlewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";

const router = Router()

router.post("/users", validateShema(createUserSchema), new CreateUserController().handle)
    


export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE