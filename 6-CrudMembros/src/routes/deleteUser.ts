import { Router } from "express";
import { deleteUser } from "../controllers/deleteUser";

const deleteUserRoutes: Router = Router();

deleteUserRoutes.delete("/:id", deleteUser)

export default deleteUserRoutes