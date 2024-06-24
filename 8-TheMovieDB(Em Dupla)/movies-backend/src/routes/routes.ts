import { Router } from "express";
import { cadastro_user,get_user,get_Favorites,new_Favorites,delete_Favorites } from "../controllers/controller";
// Definir roteador: 
const router = Router()
//Rotas Get 
router.get('/user_area', get_user)
router.get('/favorites', get_Favorites)
//Rotas Post
router.post('/sigin', cadastro_user)
router.post('/add_favorite', new_Favorites)
//Rota Delete
router.delete('/delete_favorite',delete_Favorites)

export default router