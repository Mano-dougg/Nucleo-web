import { Router } from "express";
import UserControlers from "./Controllers/UserControlers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})

router.post("/criar_membro", UserControlers.createUser);
router.get("/membro/:id", UserControlers.getUserId);
router.get("/membro/email/:email", UserControlers.getUserEmail);
router.get("/membro/nome/:nome", UserControlers.getUserNome);
router.put("/membro/update/:id", UserControlers.updateUserId);

export { router }