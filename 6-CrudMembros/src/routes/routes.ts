import { Router } from "express"
import { userPorEmail, cadastro, userPorID,userPorNome } from "../controlers/controlers"
const router = Router()


router.post("/cadastro", cadastro)

router.get("/id/:id", userPorID)

router.get("/email/:email", userPorEmail)

router.get("/nome/:nome", userPorNome);



export default router;

