import { Router } from "express";
import UserControlers from "./Controllers/UserControlers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})

router.post("/criar_membro", UserControlers.createUser);

export { router }