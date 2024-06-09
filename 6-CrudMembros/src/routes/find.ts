import { Router } from "express";
import { findAll, findByEmail, findById, findByName } from "../controllers/find";

const findRoutes: Router = Router();

findRoutes.get("/:id", findById);
findRoutes.get("/email/:email", findByEmail);
findRoutes.get("/name/:name", findByName);
findRoutes.get("/users/all", findAll)

export default findRoutes;
