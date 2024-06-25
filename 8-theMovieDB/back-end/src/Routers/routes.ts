import { Router } from "express";
import loginUser from "../Controllers/Users/loginUser";
import registerUser from "../Controllers/Users/registerUser";
import postMovie from "../Controllers/FavoriteMovies/postMovie";
import getMovie from "../Controllers/FavoriteMovies/getMovie";
import deleteMovie from "../Controllers/FavoriteMovies/deleteMovie";

const router = Router()

router.get('/', (req, res) => {
    res.send('funciona')
});

// USERS ROUTES
router.post("/auth/register", registerUser.registerUser);
router.post("/auth/login", loginUser.loginUser);

// MOVIES ROUTES
router.post("/addMovie", postMovie.postMovie);
router.get("/getMovie", getMovie.getMovie);
router.delete("/deleteMovie", deleteMovie.deleteMovie);

export { router }