import { Response } from "express"
const bcrypt = require('bcrypt')

async function checkPassword(senha: string, user:any, res: Response) {
     
     const checkSenha = await bcrypt.compare(senha, user.senha)

     if (!checkSenha) {return res.status(422).json({ error: "Email ou senha inválidos" })}
         
     return res.status(201).json({ msg: "Autenticação realizada com sucesso" })
}

export default checkPassword