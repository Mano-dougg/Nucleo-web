import { Router } from "express";
import authRoutes from "./auth";
import findRoutes from "./find";
import updateRoutes from "./update";
import deleteUserRoutes from "./deleteUser";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/find", findRoutes);
rootRouter.use("/update", updateRoutes);
rootRouter.use("/delete", deleteUserRoutes)

export default rootRouter;
