import { Router } from "express";
import UserControlers, { checkToken } from "./Controllers/UserControlers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})

// NORMAL ROUTERS
router.post("/criar_membro", UserControlers.createUser);
router.get("/membro/:id", UserControlers.getUserId);
router.get("/membro/email/:email", UserControlers.getUserEmail);
router.get("/membro/nome/:nome", UserControlers.getUserNome);
router.put("/membro/update/:id", UserControlers.updateUserId);
router.delete("/membro/delete/:id", UserControlers.deleteUserId);

// AUTH ROUTERS
router.post("/auth/register", UserControlers.registerUser);
router.post("/auth/login", UserControlers.loginUser);
router.get("/auth/user/:id", checkToken, UserControlers.getAuthUser);

export { router }