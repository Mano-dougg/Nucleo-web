import { Router } from "express";
import UserControlers from "./Controllers/UserControlers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})

router.post("/criar_membro", UserControlers.createUser);
router.get("/membro/:id", UserControlers.getUserId);
router.get("/email/:email", UserControlers.getUserEmail);
router.get("/membro", UserControlers.getUserNome);

export { router }