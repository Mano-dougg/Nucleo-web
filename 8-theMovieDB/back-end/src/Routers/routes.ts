import { Router } from "express";
import loginUser from "../Controllers/loginUser";
import registerUser from "../Controllers/registerUser";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
});

router.post("/auth/register", registerUser.registerUser);
router.post("/auth/login", loginUser.loginUser);

export { router }