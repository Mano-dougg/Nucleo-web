import { Router } from "express";
import UserControllers from "../Controllers/userControllers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})

router.post("/create_user", UserControllers.createUser);
router.get("/user", UserControllers.getUserLastId);

export { router}