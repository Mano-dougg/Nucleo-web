import { Response } from "express";

function validationLogin(user: any, email: string, senha: string, res:Response) {

    if(!user)  {return res.status(404).json({ msg: "Email ou senha inválidos" })}

    if(!email) {return res.status(422).json({ msg: "Email é obrigatório" })} 

    if(!senha) {return res.status(422).json({ msg: "Senha é obrigatória" })}

}

export default validationLogin