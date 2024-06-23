"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const JWT_SECRET = 'chave_super_secreta_aqui';
async function authenticateToken(req, res, next) {
    // Obter o token de autorização do header de requisição
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401); // Sem token, não autorizado
    }
    try {
        // Verificar o token JWT
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { username: decoded.username },
        });
        if (!user) {
            return res.sendStatus(401); // Usuário não encontrado
        }
        // Adicionar o usuário decodificado ao objeto de requisição para uso posterior
        req.user = user;
        next(); // Permitir que a requisição continue para o próximo middleware
    }
    catch (error) {
        console.error('Erro ao verificar token JWT:', error);
        return res.sendStatus(403); // Token inválido ou expirado
    }
}
//# sourceMappingURL=authenticateToken.js.map