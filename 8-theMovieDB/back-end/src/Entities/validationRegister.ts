import { Response } from "express"

function validationRegister(user: any, nome: string, email: string, senha: string, res: Response) {
    if(user) {return res.status(422).json({ error: "Já existe um usuario com este email" })}

    if(!nome)   {return res.status(422).json ({ error: "Nome é obrigatório"  })}

    if(!email)  {return res.status(422).json ({ error: "Email é obrigatório" })} 

    if(!senha)  {return res.status(422).json ({ error: "Senha é obrigatória" })}

}

export default validationRegister