import { Router } from "express"
import { userPorEmail, cadastro, userPorID, userPorNome, deletarUser,atualizar } from "../controlers/controlers"
const router = Router()


router.post("/cadastro", cadastro)

router.get("/id/:id", userPorID)

router.get("/email/:email", userPorEmail)

router.get("/nome/:nome", userPorNome);

router.delete("/deletar/:id", deletarUser)

router.put("/atualizar/:id", atualizar);



export default router;

