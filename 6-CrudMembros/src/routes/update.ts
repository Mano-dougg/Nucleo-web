import { Router } from "express";
import { update } from "../controllers/update";

const updateRoutes: Router = Router();

updateRoutes.put("/:id", update);

export default updateRoutes;
