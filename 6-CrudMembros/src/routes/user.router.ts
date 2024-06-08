import {Router} from 'express';
import { showAllUsers,getUserById, getUserByEmail, getUserByName, updateUser,deleteUserById, createUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get("/",showAllUsers);
userRouter.get("/id/:id", getUserById);
userRouter.get("/email/:email", getUserByEmail);
userRouter.get("/name/:name", getUserByName);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUserById);

export default userRouter;