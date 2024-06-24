import prisma from "./prisma"
import { Request,Response } from "express"

/* Funcões De Controle - USER 
1 - Função de cadastro do User */
export async function cadastro_user(req:Request,res:Response){
    try{
        const { nome, login, senha} = req.body
        // Checando se o nome e a senha providos são válidos
        if (String(nome).match(/[0-9]/) != null){
          throw new Error("O nome deve não deve conter numeros")
        }
        if (String(senha).length <= 5){ 
            throw new Error("Senha muito curta")
        }
        // Checando se o usuário já existe. 
        const CheckEmail = await prisma.user.findUnique({where:{ email: login }})
        if (CheckEmail !== null) {
            throw new Error("Usuário já cadastrado")
        }
        // Gerando retorno padrão esperado
        const addUser = await prisma.user.create({data:{email: login, name: nome, password: senha}})
        res.status(200).send(addUser)
    } catch (error: any) {
        console.log(error)
        res.status(400).json({msg: "Ocorreu um erro ao tentar cadastrar seu usuário!", err: error.message}).send()
    }
}
// 2 - Rota de pegar o User
export async function get_user(req: Request, res:Response ) {
    try{
        const {login, senha} = req.body
        const validate_login = await prisma.user.findUnique({where:{email:login}})
        const validate_passkey = await prisma.user.findUnique({where:{email: login,password: senha}})
        //Validação dos parametros passados pra ver ser o usuário colocou o email ou a senha errados
        if(validate_login == null){
            throw new Error("Email não é valido")
        }
        if(validate_passkey == null){
            throw new Error("Senha Incorreta")
        }
        // Gerando retorno padrão esperado
        const getUser = await prisma.user.findUnique({where:{email: login}})
        res.status(200).send(getUser)
    }catch(error: any){
        console.log(error)
        res.status(400).json({msg:"Ocorreu um erro ao pegar seu usuário!", err: error.message}).send()
    }
    
}

/* Funções de Controle - Movies
 1 - Pegar os filmes favoritos de um usuário*/
export async function get_Favorites(req: Request, res:Response) {
    try {
        /*Dados do usuário especifico - Possivelmente deverá ser alterado mais tarde
         por enquanto o que precisamos é do user_id*/
        const user = req.body
        const IsValidUser = await prisma.user.findUnique({where:{id: user}})
        // Validando o usuário por desencargo de consciência
        if(IsValidUser == null){
            throw new Error("Usuário Inválido!")
        }
        // Fetch dos dados de Favoritos. 
        const getFavs = await prisma.user.findUnique({where:{id:user}, select:{favorite:true}})
        if(getFavs !== null){
            res.status(200).send(getFavs)
        }else{
            res.status(200).json({msg:"Este usuário ainda não favoritou nada!"}).send()
        }

    } catch (error: any) {
        console.log(error)
        res.status(400).json({msg: "Erro ao requisitar lista de favoritos!", err: error.message}).send()
    }
}
// 2 - criar novos favoritos 
export async function new_Favorites(req: Request, res: Response) {
    try {
        const {user, titulo, conteudo} = req.body
        /*Aqui vai vir mais tarde a validação do titulo escolhido - pra ver se ele existe na database do TMBD
            ...Aguarde! Estamos trabalhando nisso!!! Cenas dos proximos capitulos.  
        */
        const newFavs  = await prisma.movies.create({data:{title:titulo, content: conteudo, userId: user}})
        res.status(200).send(newFavs)
    
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg: "Erro encontrado ao tentar favoritar um filme!", err: error.message})
    }
}
// 3 - deletar um favorito antigo
export async function delete_Favorites(req:Request, res:Response) {
    try {
        const {user , titulo} = req.body
        /*Aqui vai vir mais tarde a validação do titulo escolhido , tal qual na função acima- pra ver se ele existe na database do TMBD
            ...Aguarde! Estamos trabalhando nisso!!! Cenas dos proximos capitulos.  
        */
        // Database queries pra conseguir pegar o filme especifico no usuário especifico... 
        const movie_to_delete = await prisma.movies.findMany({where:{userId:user, title: titulo}, select:{movieId:true}})
        const delFavs = await prisma.movies.delete({where:{movieId:Number(movie_to_delete)}}) 
        res.status(200).send(delFavs)
    } catch (error: any) {
        console.log(error)
        res.status(400).json({msg:"Ocorreu um erro ao retificar/deletar um favorito do usuário XXXX", err: error.message})
    }
}