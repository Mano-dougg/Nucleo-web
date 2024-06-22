import { Router } from "express";
import register from "../Controllers/register";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
});

router.post("/auth/register", register.registerUser);

export { router }