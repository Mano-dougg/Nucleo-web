import { Router } from "express";
import UserControlers from "../Controllers/userControllers";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
})
