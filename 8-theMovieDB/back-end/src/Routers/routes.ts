import { Router } from "express";
import loginUser from "../Controllers/Users/loginUser";
import registerUser from "../Controllers/Users/registerUser";
import postMovie from "../Controllers/FavoriteMovies/postMovie";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
});

// USERS ROUTES
router.post("/auth/register", registerUser.registerUser);
router.post("/auth/login", loginUser.loginUser);

// MOVIES ROUTES
router.post("/add_movie", postMovie.postMovie)

export { router }