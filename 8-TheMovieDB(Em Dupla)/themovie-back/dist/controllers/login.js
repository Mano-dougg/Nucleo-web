"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const JWT_SECRET = 'token';
exports.default = {
    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await prisma.user.findUnique({
                where: { username },
            });
            if (!user) {
                return res.status(401).json({ error: 'Nome de usuário ou senha incorretos.' });
            }
            const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Nome de usuário ou senha incorretos.' });
            }
            const token = jsonwebtoken_1.default.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        }
        catch (error) {
            console.error('Erro ao autenticar usuário:', error);
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    },
};
//# sourceMappingURL=login.js.map