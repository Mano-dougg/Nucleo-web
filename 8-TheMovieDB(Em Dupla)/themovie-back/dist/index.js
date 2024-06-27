"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cadastro_1 = __importDefault(require("./controllers/cadastro"));
const login_1 = __importDefault(require("./controllers/login"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const BASE_URL = 'https://api.themoviedb.org/3';
/* Cadastrar Usuario*/
app.post('/cadastro', cadastro_1.default.user);
/* LOGIN */
app.post('/login', login_1.default.login);
app.get('/movies', async (req, res) => {
    try {
        const response = await axios_1.default.get(`${BASE_URL}/discover/movie`, {
            params: {
                sort_by: 'popularity.desc',
                api_key: API_KEY,
                page: 1
            }
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map